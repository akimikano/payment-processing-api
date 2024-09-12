const { DataTypes } = require('sequelize');
const {BANK_ACCOUNT_STATUS} = require('../../../domain/constants')


module.exports = (sequelize) =>
    sequelize.define(
        'bank_accounts',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            first_name: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
            last_name: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
            middle_name: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
            passport_num: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
            balance: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            account_num: {
                allowNull: false,
                type: DataTypes.STRING(16),
            },
            currency: {
                allowNull: false,
                type: DataTypes.STRING(3),
            },
            account_status: {
                allowNull: false,
                type: DataTypes.ENUM(BANK_ACCOUNT_STATUS.ACTIVE, BANK_ACCOUNT_STATUS.BLOCKED),
                defaultValue: BANK_ACCOUNT_STATUS.ACTIVE
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            }
        }
    );