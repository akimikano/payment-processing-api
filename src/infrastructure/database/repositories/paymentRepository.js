

function paymentRepository(paymentModel) {
    const getAll = async () =>
        await paymentModel.findAll();

    const getOne =  async (params) =>
        await paymentModel.findOne(params);

    const create = async (payment) => {
        const {amount, sender_account_id, recipient_account_id} = payment;
        return await paymentModel.create(
            {
                amount: amount,
                sender_account_id: sender_account_id,
                recipient_account_id: recipient_account_id
            }
        )
    }

    return {
        getAll,
        getOne,
        create
    };
}


module.exports = paymentRepository;