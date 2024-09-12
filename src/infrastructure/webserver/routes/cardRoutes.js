const validateMiddleware = require("../middleware/validateMiddleware.js");
const {CardModel} = require("../../database");
const CardCreateSchema = require("../schemas/cardSchemas");
const cardRepositoryInterface = require("../../../application/repositories/cardRepositoryInterface");
const cardRepository = require("../../database/repositories/cardRepository");
const cardController = require("../../../controllers/cardController");
const {findException} = require("../middleware/exceptionHandler");


function cardRouter(express) {
    const router = express.Router();

    const controller = cardController(
        cardRepositoryInterface,
        cardRepository(CardModel)
    );

    router
        .route("/create")
        .post(
            validateMiddleware(CardCreateSchema),
            findException(controller.createCard)
        );


    return router;
}

module.exports = cardRouter;
