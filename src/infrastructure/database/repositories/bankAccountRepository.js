

function bankAccountRepository(bankAccountModel) {
    const getAll = async () =>
        await bankAccountModel.findAll();

    const getOne =  async (params) =>
        await bankAccountModel.findOne(params);

    return {
        getAll,
        getOne
    };
}


module.exports = bankAccountRepository;
