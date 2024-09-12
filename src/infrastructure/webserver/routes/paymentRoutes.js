const terminalController = require("../../../controllers/terminalController.js");
const validateMiddleware = require("../middleware/validateMiddleware.js");
const {PaymentInitiateSchema, PaymentPinSchema} = require("../schemas/paymentSchemas");
const paymentController = require("../../../controllers/paymentController");
const paymentRepositoryInterface = require("../../../application/repositories/paymentRepositoryInterface");
const paymentRepository = require("../../database/repositories/paymentRepository");
const {PaymentModel} = require("../../database");
const jwtAuthentication = require("../middleware/jwtAuthentication");
const {findException} = require("../middleware/exceptionHandler");


function paymentRouter(express) {
    const router = express.Router();

    const controller = paymentController(
        paymentRepositoryInterface,
        paymentRepository(PaymentModel)
    );

    router
        .route("/initiate-payment")
        .post(
            jwtAuthentication(),
            validateMiddleware(PaymentInitiateSchema),
            findException(controller.initiatePayment)
        )

    router
        .route("/confirm-payment/:payment_id")
        .post(
            jwtAuthentication(),
            validateMiddleware(PaymentPinSchema),
            findException(controller.confirmPayment)
        )

    return router;
}

module.exports = paymentRouter;
