const terminalController = require("../../../controllers/terminalController.js");
const validateMiddleware = require("../middleware/validateMiddleware.js");
const {PaymentInitiateSchema, PaymentPinSchema} = require("../schemas/paymentSchemas");
const paymentController = require("../../../controllers/paymentController");
const paymentRepositoryInterface = require("../../../application/repositories/paymentRepositoryInterface");
const paymentRepository = require("../../database/repositories/paymentRepository");
const {PaymentModel} = require("../../database");


function paymentRouter(express) {
    const router = express.Router();

    const controller = paymentController(
        paymentRepositoryInterface,
        paymentRepository(PaymentModel)
    );

    router
        .route("/")
        .get(
            controller.fetchAllPayments
        );

    router
        .route("/initiate-payment")
        .post(
            validateMiddleware(PaymentInitiateSchema),
            controller.initiatePayment
        )

    router
        .route("/confirm-payment")
        .post(
            validateMiddleware(PaymentPinSchema),
            controller.confirmPayment
        )

    return router;
}

module.exports = paymentRouter;
