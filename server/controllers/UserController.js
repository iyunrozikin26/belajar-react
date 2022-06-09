const { compare } = require('../helper/bcrypt');
const { sign } = require('../helper/jwt');
const {User} = require('../models')

module.exports = class Controller {
  static register(req, res, next){
    const data = {
      email : req.body.email,
      password : req.body.password,
      role : req.body.role,
      phoneNumber : req.body.phoneNumber,
      address : req.body.address
    }
    User.create(data)
      .then((result) => {
        res.status(200).json({status : true, data : {
          id : result.id,
          email : result.email,
          role : result.role,
          phoneNumber : result.phoneNumber,
          address : result.address
        }})
      }).catch((err) => {
        next(err)
      });
  }

  static login (req, res, next) {
    User.findOne({
      where : {
        email : req.body.email
      }
    })
      .then((result) => {
        if(!result){
          throw {status : 401, message : 'email/password salah'}
        }else {
          const check = compare(req.body.password, result.password)
          if (!check) {
            throw {status : 401, message : 'email/password salah'}
          } else {
            const access_token = sign({id : result.id, email : result.email})
            res.status(200).json({access_token})
          }
        }
      }).catch((err) => {
        next(err)
      });
  }
}