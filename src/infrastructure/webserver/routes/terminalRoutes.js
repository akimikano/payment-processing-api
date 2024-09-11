const terminalController = require("../../../controllers/terminalController.js");
const validateMiddleware = require("../middleware/validateMiddleware.js");
const {TerminalAuthSchema, TerminalCreateSchema} = require("../schemas/terminalSchemas");
const terminalRepositoryInterface = require("../../../application/repositories/terminalRepositoryInterface");
const terminalRepository = require("../../database/repositories/terminalRepository");
const {TerminalModel} = require("../../database");


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
            controller.createTerminal
        );

    router
        .route("/jwt-create")
        .post(
            validateMiddleware(TerminalAuthSchema),
            controller.createJwtTokens
        );

    return router;
}

module.exports = terminalRouter
