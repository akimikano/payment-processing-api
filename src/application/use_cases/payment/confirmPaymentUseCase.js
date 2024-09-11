const {BANK_ACCOUNT_STATUS, CARD_STATUS, PAYMENT_STATUS} = require("../../../domain/constants");
const Payment = require("../../../domain/entities/payment");
const {ServerError, UserException, NotFound} = require("../../../infrastructure/webserver/exceptions");
const config = require("../../../config");

async function confirmPaymentUseCase(
    payment_id,
    card_pin,
    paymentRepository,
    accountRepository,
    cardRepository
) {
    const db_payment = await paymentRepository.getOne(
        {where: {id: payment_id, payment_status: "CREATED"}}
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

    if (sender_card.pin_hash !== card_pin) {
        throw new UserException("Incorrect PIN code.")
    }

    const recipient_account = await accountRepository.getOne(
        {where: {id: db_payment.recipient_account_id, account_status: BANK_ACCOUNT_STATUS.ACTIVE}}
    )

    if (db_payment.pin_tries >= config.pinMaxTries) {
        db_payment.payment_status = PAYMENT_STATUS.CANCELED
        return false;
    }

    db_payment.pin_tries += 1

    if (card.pin_hash !== pin) {
        throw new UserException("Incorrect PIN code.")
    }

    sender_account.balance -= db_payment.amount
    recipient_account.balance += db_payment.amount
    db_payment.payment_status = PAYMENT_STATUS.CONFIRMED

    await sender_account.save()
    await recipient_account.save()
    await db_payment.save()

    return db_payment;
}


module.exports = initiatePaymentUseCase;
