const { verify } = require("../helper/jwt")

const checkLogin = (req, res, next) => {
  try {
    const access_token = req.headers.access_token
    if (!access_token) {
      throw {
        status: 401,
        message: 'access token tidak ditemukan'
      }
    }
    let decoded = verify(access_token)
    req.user = {
      id : decoded.id,
      email : decoded.email
    }
    next()
  } catch (err) {
    next(err)
  }
}

// const checkOwner = (req, res, next) => {

// }

module.exports = {
  checkLogin
}