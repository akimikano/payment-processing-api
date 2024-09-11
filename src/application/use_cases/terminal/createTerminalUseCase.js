const {matchPassword, generateJwtTokens, hashPassword} = require("../../../domain/services/auth");

async function createTerminalUseCase(
    password,
    terminalRepository
) {
    const hashedPassword = await hashPassword(password);
    return await terminalRepository.create(hashedPassword)
}


module.exports = createTerminalUseCase;
