import { Sequelize } from'sequelize'

const sequelize = new Sequelize(
  'manage_users',
  'yvart',
  '1234',{
    host: 'localhost',
    dialect: 'mysql'
  }
)

export default  sequelize
