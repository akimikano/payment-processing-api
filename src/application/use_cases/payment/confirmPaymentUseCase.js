const {BANK_ACCOUNT_STATUS, CARD_STATUS, PAYMENT_STATUS} = require("../../../domain/constants");
const Payment = require("../../../domain/entities/payment");
const {ServerError, UserException, NotFound} = require("../../../infrastructure/webserver/exceptions");
const config = require("../../../config");
const {matchPIN} = require("../../../domain/services/cardServices");

async function confirmPaymentUseCase(
    payment_id,
    card_pin,
    paymentRepository,
    accountRepository,
    cardRepository
) {
    const db_payment = await paymentRepository.getOne(
        {where: {id: payment_id, payment_status: PAYMENT_STATUS.CREATED}}
    );

    if (db_payment === null) {
        throw new NotFound("Payment not found.");
    }

    const sender_account = await accountRepository.getOne(
        {where: {id: db_payment.sender_account_id, account_status: BANK_ACCOUNT_STATUS.ACTIVE}}
    )

    const sender_card = await cardRepository.getOne(
        {where: {bank_account_id: sender_account.id, card_status: CARD_STATUS.ACTIVE}}
    )

    const recipient_account = await accountRepository.getOne(
        {where: {id: db_payment.recipient_account_id, account_status: BANK_ACCOUNT_STATUS.ACTIVE}}
    )

    db_payment.pin_tries += 1

    if (!await matchPIN(card_pin, sender_card.pin_hash)) {

        if (db_payment.pin_tries >= config.pinMaxTries) {
            db_payment.payment_status = PAYMENT_STATUS.CANCELED
            await db_payment.save()
            throw new UserException("Too much tries.")
        }

        await db_payment.save()
        throw new UserException("Incorrect PIN code.")
    }

    await accountRepository.updateBalance(sender_account.id, sender_account.balance -= db_payment.amount)
    await accountRepository.updateBalance(recipient_account.id, recipient_account.balance += db_payment.amount)

    db_payment.payment_status = PAYMENT_STATUS.CONFIRMED
    await db_payment.save()

    return db_payment;
}


module.exports = confirmPaymentUseCase;
