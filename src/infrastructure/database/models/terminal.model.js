const { DataTypes } = require('sequelize');


module.exports = (sequelize) =>
    sequelize.define('terminals', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        password_hash: {
            allowNull: false,
            type: DataTypes.TEXT,
            unique: true
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        }
    });
