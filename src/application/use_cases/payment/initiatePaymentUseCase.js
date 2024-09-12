const {BANK_ACCOUNT_STATUS} = require("../../../domain/constants");
const Payment = require("../../../domain/entities/payment");
const {ServerError, UserException, NotFound} = require("../../../infrastructure/webserver/exceptions");

async function initiatePaymentUseCase(
    sender_account_id,
    recipient_account_id,
    amount,
    paymentRepository,
    accountRepository
) {
    const sender_account = await accountRepository.getOne(
        {where: {id: sender_account_id, account_status: BANK_ACCOUNT_STATUS.ACTIVE}}
    );

    if (sender_account === null) {
        throw new NotFound("Sender account not found.");
    }

    const recipient_account = await accountRepository.getOne(
        {where: {id: recipient_account_id, account_status: BANK_ACCOUNT_STATUS.ACTIVE}}
    );

    if (recipient_account === null) {
        throw new NotFound("Recipient account not found.");
    }

    if (sender_account.balance < amount) {
        throw new UserException("Not enough money on sender account.");
    }

    const payment = new Payment(
        null,
        amount,
        0,
        "CREATED",
        sender_account.id,
        recipient_account.id,
    )

    return await paymentRepository.create(payment)
}


module.exports = initiatePaymentUseCase;
