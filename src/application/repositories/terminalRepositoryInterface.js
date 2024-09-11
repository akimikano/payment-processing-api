
function terminalRepositoryInterface(repository) {
    const create = async (password_hash) => await repository.create(password_hash);
    const getOne = async (params) => await repository.getOne(params);

    return {
        create,
        getOne,
    };
}

module.exports = terminalRepositoryInterface;

