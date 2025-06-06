import { DataTypes } from 'sequelize'
import sequelize from '../config/db.js'

const Activity = sequelize.define('Activity', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  create_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'activity',
  timestamps: false,
  underscored: true
})

export default Activity
