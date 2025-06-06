import express from 'express'
import { getActivities } from '../services/actService.js'
import verifyToken from '../authMidleware.js'

const router = express.Router()

router.get('/acts', verifyToken, getActivities)


export default router
