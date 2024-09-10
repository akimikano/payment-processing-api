import terminalController from "../../../controllers/terminalController.js";
import {validateMiddleware} from "../middleware/validateMiddleware.js";
import {TerminalCreateSchema} from "../schemas/terminalSchemas.js";


export default function terminalRouter(express) {
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
