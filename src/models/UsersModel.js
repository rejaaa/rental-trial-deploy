const { DataTypes } = require('sequelize');
const { Database } = require('../libraries/database');

function UsersModel() {
    return Database.define('Users', {
        ID: {
            type: DataTypes.NUMBER, // character variying , string
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        Username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        FullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'usertb',
        timestamps: true,
    });
}

module.exports = UsersModel;
