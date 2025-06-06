import { DataTypes }  from 'sequelize'
import sequelize from '../config/db.js'


const User = sequelize.define('user',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fname: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  lname: {
    type: DataTypes.STRING(40),
    allowNull: true
  },
  nickname: {
    type: DataTypes.STRING(40),
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  domain: {
    type: DataTypes.ENUM('F','B'),
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('admin', 'manager', 'developer'),
     defaultValue: 'developer',
    allowNull: false
  }
},{
  tableName: 'user',
  timestamps: false
})

//sequelize.sync() //create table if not exists

export default User
