const { DataTypes, Model } = require('sequelize');
const {PAYMENT_STATUS} = require("../../../domain/constants");


module.exports = (sequelize) =>
    sequelize.define(
        'payments',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            amount: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            pin_tries: {
                allowNull: false,
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            payment_status: {
                allowNull: false,
                type: DataTypes.ENUM(
                    PAYMENT_STATUS.CREATED,
                    PAYMENT_STATUS.CONFIRMED,
                    PAYMENT_STATUS.CANCELED
                ),
                defaultValue: PAYMENT_STATUS.CREATED
            },
            sender_account_id: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            recipient_account_id: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            confirmed_at: {
                type: DataTypes.DATE,
            },
            canceled_at: {
                type: DataTypes.DATE,
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            }
        }
    );