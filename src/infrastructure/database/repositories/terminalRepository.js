

function terminalRepository(terminalModel) {
    const findAll = async () =>
        await terminalModel.findAll();

    return {
        findAll
    };
}


module.exports = terminalRepository;