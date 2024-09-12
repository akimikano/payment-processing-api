const BankAccount = require("../../../domain/entities/bankAccount");
const {BankAccountModel} = require("../index");


function bankAccountRepository(bankAccountModel) {
    const getAll = async () => {
        const accounts = await bankAccountModel.findAll();
        return accounts.map((db_account) => {
            return new BankAccount(...Object.values(db_account.dataValues))
        })
    }

    const getOne =  async (params) => {
        const db_account = await bankAccountModel.findOne(params);
        if (!db_account) {
            return null;
        }
        return new BankAccount(...Object.values(db_account.dataValues))
    }

    const updateBalance = async (id, new_balance) => {
        await BankAccountModel.update({balance: new_balance}, {where: {id: id}});
    }

    return {
        getAll,
        getOne,
        updateBalance
    };
}


module.exports = bankAccountRepository;
