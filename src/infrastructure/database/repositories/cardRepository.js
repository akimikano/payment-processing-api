

function cardRepository(cardModel) {
    const getAll = async () =>
        await cardModel.findAll();

    const getOne =  async (params) =>
        await cardModel.findOne(params);

    const create = async (card) => {
        return await cardModel.create(
            {
                bank_account_id: card.bank_account_id,
                pin_hash: card.pin_hash,
                expires_at: card.expires_at,
                card_status: card.card_status,
                card_cvv: card.card_cvv,
                cardholder_name: card.cardholder_name,
                activated_at: card.activated_at,
                blocked_at: card.blocked_at,
                created_at: card.created_at
            }
        );
    }

    return {
        getAll,
        getOne,
        create
    };
}


module.exports = cardRepository;
