const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    alllowNull: false,
    primaryKey: true
},
username: Sequelize.STRING,
email: Sequelize.STRING,

});


module.exports = User;