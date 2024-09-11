const {matchPassword, generateJwtTokens} = require("../../../domain/services/auth");
const {NotFound} = require("../../../infrastructure/webserver/exceptions");

async function authTerminalUseCase(
    terminal_id,
    password,
    terminalRepository
) {
    const db_terminal = await terminalRepository.getOne({where: {id: terminal_id}});

    if (db_terminal === null) {
        throw new NotFound("Wrong terminal_id or password.");
    }

    const passwordCorrect = await matchPassword(password, db_terminal.password_hash)

    if (!passwordCorrect) {
        throw new NotFound("Wrong terminal_id or password.");
    }

    return generateJwtTokens(terminal_id)
}


module.exports = authTerminalUseCase;
