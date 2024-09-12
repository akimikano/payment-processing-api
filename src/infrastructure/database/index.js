const { Sequelize, DataTypes } = require('sequelize');
const config = require("../../config");


const sequelize = new Sequelize(
    config.postgres_db,
    config.postgres_user,
    config.postgres_password,

    {
        host: config.db_host,
        port: config.db_port,
        dialect: 'postgres',
        define: {
            timestamps: false,
        },
        logging: false
    },
);


const TerminalModelDefiner = require('./models/terminal.model')
const BankAccountModelDefiner = require('./models/bankAccount.model')
const PaymentModelDefiner = require('./models/payment.model')
const CardModelDefiner = require('./models/card.model')

const TerminalModel = TerminalModelDefiner(sequelize);
const BankAccountModel = BankAccountModelDefiner(sequelize);
const PaymentModel = PaymentModelDefiner(sequelize);
const CardModel = CardModelDefiner(sequelize);

PaymentModel.belongsTo(BankAccountModel, {foreignKey: 'sender_account_id'})
PaymentModel.belongsTo(BankAccountModel, {foreignKey: 'recipient_account_id'})
CardModel.belongsTo(BankAccountModel, {foreignKey: 'bank_account_id'})


module.exports = {sequelize, TerminalModel, BankAccountModel, PaymentModel, CardModel};
