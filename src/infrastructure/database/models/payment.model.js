const { DataTypes } = require('sequelize');


module.exports = (sequelize) =>
    sequelize.define('payments', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        payment_status: {
            allowNull: false,
            type: DataTypes.ENUM("CREATED", "CONFIRMED", "CANCELED"),
            defaultValue: "CREATED"
        },
        recipient_account_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: "bank_accounts",
            referencesKey: "id"
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        }
    });