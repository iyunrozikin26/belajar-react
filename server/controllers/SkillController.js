const {Skill, Job, Company, User} = require ('../models')

module.exports = class Controller {
  static getAllSkill(req, res, next){
    Skill.findAll({
      include : [{
        model : Job,
        attributes : ['title','description'],
        include : [{
          model : Company,
          attributes : ['name','email'],
        },{
          model : User,
          attributes : ['email','phoneNumber'],
        }]
      }]
    })
      .then((result) => {
        res.json(result)
      }).catch((err) => {
        next(err)
      });
  }
}