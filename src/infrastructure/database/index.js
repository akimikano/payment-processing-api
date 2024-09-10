const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite3',
    define: {
        timestamps: false,
    }
});


const TerminalModelDefiner = require('./models/terminal.model')
const BankAccountModelDefiner = require('./models/bankAccount.model')
const PaymentModelDefiner = require('./models/payment.model')

const TerminalModel = TerminalModelDefiner(sequelize);
const BankAccountModel = BankAccountModelDefiner(sequelize);
const PaymentModel = PaymentModelDefiner(sequelize);


module.exports = {sequelize, TerminalModel, BankAccountModel, PaymentModel};
