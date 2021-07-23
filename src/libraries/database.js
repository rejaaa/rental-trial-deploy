const Sequelize = require('sequelize');

const Database = new Sequelize({
    dialect: 'postgres',
    database: 'db_user_mgt',
    username: 'postgres',
    password: 'Rejaaa10'
});

// check database connections
async function checkConnection() {
    console.log('trying to connect postgre database...');
    try {
        await Database.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database ', error);
        throw (error);
    }
}

module.exports = {
    Database,
    checkConnection,
}
