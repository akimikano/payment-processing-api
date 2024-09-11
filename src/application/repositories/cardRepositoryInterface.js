
function cardRepositoryInterface(repository) {
    const getOne = async (params) => await repository.getOne(params);

    return {
        getOne,
    };
}

module.exports = cardRepositoryInterface;

