
function cardRepositoryInterface(repository) {
    const getOne = async (params) => await repository.getOne(params);
    const create = async (params) => await repository.create(params);

    return {
        getOne,
        create
    };
}

module.exports = cardRepositoryInterface;

