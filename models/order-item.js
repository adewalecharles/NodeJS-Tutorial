const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const OrderItem = sequelize.define('orderItem', {
id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    alllowNull: false,
    primaryKey: true
},

quantity: Sequelize.INTEGER
});


module.exports = OrderItem;