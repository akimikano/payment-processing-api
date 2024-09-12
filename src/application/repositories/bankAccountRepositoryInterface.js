
function bankAccountRepositoryInterface(repository) {
    const getAll = async (params) => repository.getAll(params);
    const getOne = async (params) => await repository.getOne(params);
    const updateBalance = async (id, new_balance) => await repository.updateBalance(id, new_balance);


    return {
        getAll,
        getOne,
        updateBalance
    };
}

module.exports = bankAccountRepositoryInterface;

