require('dotenv').config();

const jwt = require('jsonwebtoken');



//Generate Token
module.exports.GenerateToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' },);
}



//Verify Token
module.exports.verifyToken = (req, res, next) => {

  const authcookie = req.cookies.authcookie
  const token = authcookie;// && authcookie.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, token) => {

    if (err) return res.sendStatus(403);
    req.token = token;
    next()
  })

}