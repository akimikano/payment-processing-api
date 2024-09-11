const authTerminalUseCase = require("../application/use_cases/terminal/authTerminalUseCase");
const createTerminalUseCase = require("../application/use_cases/terminal/createTerminalUseCase");

function terminalController(
    terminalRepositoryInterface,
    terminalRepository
) {
    const terminalDbRepository = terminalRepositoryInterface(terminalRepository);

    const createTerminal = async (req, res, next) => {
        const terminal = await createTerminalUseCase(req.body.password, terminalDbRepository);
        return res.status(201).json({id: terminal.id, created_at: terminal.created_at})
    }

    const createJwtTokens = async (req, res, next) => {
        const token = await authTerminalUseCase(
            req.body.terminal_id,
            req.body.password,
            terminalDbRepository
        )
        console.log(token)
        return res.json({ token });
    }

    return {
        createJwtTokens,
        createTerminal
    };
}

module.exports = terminalController;
