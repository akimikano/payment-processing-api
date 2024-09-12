const getAllPayments = require("../application/use_cases/payment/getAllPayments");
const initiatePaymentUseCase = require("../application/use_cases/payment/initiatePaymentUseCase");
const bankAccountRepositoryInterface = require("../application/repositories/bankAccountRepositoryInterface");
const bankAccountRepository = require("../infrastructure/database/repositories/bankAccountRepository");
const {BankAccountModel, CardModel} = require("../infrastructure/database");
const confirmPaymentUseCase = require("../application/use_cases/payment/confirmPaymentUseCase");
const cardRepositoryInterface = require("../application/repositories/cardRepositoryInterface");
const cardRepository = require("../infrastructure/database/repositories/cardRepository");


function paymentController(
    paymentRepositoryInterface,
    paymentRepository
) {
    const paymentDbRepository = paymentRepositoryInterface(paymentRepository);
    const accountDbRepository = bankAccountRepositoryInterface(bankAccountRepository(BankAccountModel))
    const cardDbRepository = cardRepositoryInterface(cardRepository(CardModel))

    const fetchAllPayments = async (req, res, next) => {
        return await getAllPayments({}, paymentDbRepository)
    }

    const initiatePayment = async (req, res, next) => {
        const payment = await initiatePaymentUseCase(
            req.body.sender_account_id,
            req.body.recipient_account_id,
            req.body.amount,
            paymentDbRepository,
            accountDbRepository
        )
        return res.json(payment)
    }

    const confirmPayment = async (req, res, next) => {
        const payment = await confirmPaymentUseCase(
            req.params.payment_id,
            req.body.card_pin,
            paymentDbRepository,
            accountDbRepository,
            cardDbRepository
        )
        return res.json(payment)
    }

    return {
        fetchAllPayments,
        initiatePayment,
        confirmPayment
    }
}


module.exports = paymentController;
