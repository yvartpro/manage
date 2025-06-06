const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Product = sequelize.define('product',{
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prix: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
})


module.exports = Product
