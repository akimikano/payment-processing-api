
async function getAllPayments(params, paymentRepository) {
    return await paymentRepository.getAll(params);
}


module.exports = getAllPayments;
