const { DataTypes } = require('sequelize');
const {CARD_STATUS} = require("../../../domain/constants");


module.exports = (sequelize) =>
    sequelize.define(
        'cards',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            bank_account_id: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            pin_hash: {
                allowNull: false,
                type: DataTypes.TEXT
            },
            expires_at: {
                allowNull: false,
                type: DataTypes.DATE
            },
            card_status: {
                allowNull: false,
                type: DataTypes.ENUM(CARD_STATUS.ACTIVE, CARD_STATUS.BLOCKED),
                defaultValue: CARD_STATUS.ACTIVE
            },
            card_cvv: {
                allowNull: false,
                type: DataTypes.STRING(3)
            },
            cardholder_name: {
                allowNull: false,
                type: DataTypes.STRING(255)
            },
            activated_at: {
                type: DataTypes.DATE,
            },
            blocked_at: {
                type: DataTypes.DATE,
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            }
        }
);
