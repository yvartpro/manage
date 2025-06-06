import dotenv from 'dotenv'
import express from'express'
import cors from 'cors'
import userRoutes  from './routes/userRoutes.js'
import actRoutes  from './routes/actRoutes.js'
import taskRoutes  from './routes/taskRoutes.js'
import sequelize from './config/db.js'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()
app.use(cookieParser())

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}))

app.use(express.json())

app.use('/', userRoutes)
app.use('/', actRoutes)
app.use('/', taskRoutes)


export default app
