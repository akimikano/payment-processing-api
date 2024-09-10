const terminalController = require("../../../controllers/terminalController.js");
const validateMiddleware = require("../middleware/validateMiddleware.js");
const TerminalCreateSchema = require("../schemas/terminalSchemas.js");


function terminalRouter(express) {
    const router = express.Router();

    const controller = terminalController();

    router
        .route("/")
        .get(controller.getAll);

    router
        .route("/")
        .post(validateMiddleware(TerminalCreateSchema), controller.create)

    return router;
}

module.exports = terminalRouter
