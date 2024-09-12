const terminalController = require("../../../controllers/terminalController.js");
const validateMiddleware = require("../middleware/validateMiddleware.js");
const {TerminalAuthSchema, TerminalCreateSchema} = require("../schemas/terminalSchemas");
const terminalRepositoryInterface = require("../../../application/repositories/terminalRepositoryInterface");
const terminalRepository = require("../../database/repositories/terminalRepository");
const {TerminalModel} = require("../../database");
const {findException} = require("../middleware/exceptionHandler");


function terminalRouter(express) {
    const router = express.Router();

    const controller = terminalController(
        terminalRepositoryInterface,
        terminalRepository(TerminalModel)
    );

    router
        .route("/create")
        .post(
            validateMiddleware(TerminalCreateSchema),
            findException(controller.createTerminal)
        );

    router
        .route("/jwt-create")
        .post(
            validateMiddleware(TerminalAuthSchema),
            findException(controller.createJwtTokens)
        );

    return router;
}

module.exports = terminalRouter
