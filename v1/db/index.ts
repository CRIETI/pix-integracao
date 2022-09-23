const Sequelize = require('sequelize');

const db = new Sequelize('pixteste', 'postgres', 'postgresCrieProf', {
    host: '177.44.248.30',
    port: '5432',
    dialect: 'postgres'
});

db.sync();

module.exports = db;
