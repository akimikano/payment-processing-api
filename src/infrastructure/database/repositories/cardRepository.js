

function cardRepository(cardModel) {
    const getAll = async () =>
        await cardModel.findAll();

    const getOne =  async (params) =>
        await cardModel.findOne(params);

    return {
        getAll,
        getOne
    };
}


module.exports = cardRepository;
