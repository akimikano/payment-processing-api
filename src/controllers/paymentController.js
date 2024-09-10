const getAllPayments = require("../application/use_cases/payment/getAllPayments");


function paymentController(
    paymentRepositoryInterface,
    paymentRepository
) {
    const dbRepository = paymentRepositoryInterface(paymentRepository());

    const fetchAllPayments = async (req, res, next) => {
        return await getAllPayments({}, dbRepository)
    }

    return {
        fetchAllPayments
    }
}


module.exports = paymentController;
