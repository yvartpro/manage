import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
  const token = req.cookies.token
  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded // attach user info
    next()
  } catch (err) {
    res.status(403).json({ message: 'Token is invalid or expired' })
  }
}

export default verifyToken
