
function bankAccountRepositoryInterface(repository) {
    const getAll = async (params) => repository.getAll(params);
    const getOne = async (params) => await repository.getOne(params);

    return {
        getAll,
        getOne
    };
}

module.exports = bankAccountRepositoryInterface;

