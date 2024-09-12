const createTerminalUseCase = require("../application/use_cases/terminal/createTerminalUseCase");
const createCardUseCase = require("../application/use_cases/card/createCardUseCase");

function cardController(
    cardRepositoryInterface,
    cardRepository
) {
    const cardDbRepository = cardRepositoryInterface(cardRepository);

    const createCard = async (req, res, next) => {
        const card = await createCardUseCase(req.body.bank_account_id, req.body.card_pin, cardDbRepository);
        return res.status(201).json({id: card.id, created_at: card.created_at})
    }
    return {
        createCard
    };
}

module.exports = cardController;
