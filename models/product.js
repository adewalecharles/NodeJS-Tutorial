const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    alllowNull: false,
    primaryKey: true
},
title: Sequelize.STRING,
price: {
    type: Sequelize.DOUBLE,
    alllowNull: false
},
imageUrl: {
    type: Sequelize.STRING,
    alllowNull: false
},
description: {
    type: Sequelize.STRING,
    alllowNull: false
}
});

module.exports = Product;