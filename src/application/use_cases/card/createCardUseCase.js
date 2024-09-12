const {BANK_ACCOUNT_STATUS, CARD_STATUS, PAYMENT_STATUS} = require("../../../domain/constants");
const Payment = require("../../../domain/entities/payment");
const {ServerError, UserException, NotFound} = require("../../../infrastructure/webserver/exceptions");
const config = require("../../../config");
const Card = require("../../../domain/entities/card");
const {hashPIN} = require("../../../domain/services/cardServices");

async function createCardUseCase(
    bank_account_id,
    card_pin,
    cardRepository
) {

    const card = new Card({
        bank_account_id: bank_account_id,
        pin_hash: await hashPIN(card_pin),
        expires_at: new Date().setDate(new Date().getDate() + 10),
        card_status: CARD_STATUS.ACTIVE,
        card_cvv: "123",
        cardholder_name: "Test card",
        activated_at: null,
        blocked_at: null
    })
    return await cardRepository.create(card)
}


module.exports = createCardUseCase;
