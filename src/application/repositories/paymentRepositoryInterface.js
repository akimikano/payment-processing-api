
function paymentRepositoryInterface(repository) {
    const getAll = async (params) => repository.getAll(params);
    const getOne = async (params) => await repository.getOne(params);
    const create = async (params) => repository.create(params);

    return {
        getAll,
        getOne,
        create
    };
}

module.exports = paymentRepositoryInterface;

