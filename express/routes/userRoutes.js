import express from 'express'
import { registerUser, loginUser } from'../services/userService.js'
import cookie_parser from'cookie-parser'
import verifyToken from '../authMidleware.js'


const router = express.Router()

//register user
router.post('/register', async (req, res) =>{
  try{
    const userData = req.body
    const { fname, lname, nickname,domain, password } = userData
    const newUser = await registerUser(fname, lname, nickname, domain, password)
    res.status(201).json({success: true, message: 'User added !', user: userData})
  }catch(err){
    res.status(400).json({success: false, sapor : err.message})
  }
})

//login user
router.post('/login', async(req, res)=>{
  try{
    const userData = req.body
    const { nickname, password } = userData
    const user = await loginUser(nickname, password)
    if(!user.success) res.status(401).json(user)
    //set cookie
    res.cookie('token', user.token, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 1000
    })
    res.status(200).json(user)
    res.json({t: "tete"})
  }catch(err){
    res.status(401).json({success: false, sapor: err.message})
  }
})

//get home page
router.get('/profile', verifyToken, (req, res) => {
  res.json({ user: req.user })
})

//logout
router.post('/logout', (req, res) =>{
  res.clearCookie('token')
  res.status(200).json({ message: 'Logout successfully' })
})


export default router
