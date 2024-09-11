

function terminalRepository(terminalModel) {
    const getOne =  async (params) =>
        await terminalModel.findOne(params);

    const create =  async (password_hash) =>
        await terminalModel.create({password_hash: password_hash});


    return {
        getOne,
        create
    };
}


module.exports = terminalRepository;