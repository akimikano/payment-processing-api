
function paymentRepositoryInterface(repository) {
    const getAll = (params) => repository.getAll(params);

    return {
        getAll
    };
}

module.exports = paymentRepositoryInterface;

