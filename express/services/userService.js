import jwt from'jsonwebtoken'
import bcrypt from'bcryptjs'
import { User } from'../models/index.js'

export const registerUser = async (fname, lname, nickname, domain, password ) =>{
  console.log(fname)
  const hashedPass = await bcrypt.hash(password, 10)
  const newUser = await User.create({
    fname, lname, nickname, domain, password: hashedPass
  })
  return newUser
}

export const loginUser = async (nickname, password ) =>{
  try{
    const _user = await User.findOne({ where: { nickname }})
    if(!_user) return {success: false, sapor: "User not found."}
    const isAuth = await bcrypt.compare(password, _user.password)
    if(!isAuth) throw new Error("Credentials not matching.")

    const payload = {
      id: _user.id,
      nickname: _user.nickname,
      role: _user.role,
    }
    const user = {
      fname: _user.fname,
      lname: _user.lname,
      nickname: _user.nickname,
      role: _user.role,
      domain: _user.domain
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h'})
    return { success: true, user, token }
  }catch(err){
    return { success: false, sapor: err.message }
  }
}
