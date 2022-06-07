const {Job, User, Company, sequelize} = require('../models')

module.exports = class Controller {
  static getAllJobs (req, res, next) {
    Job.findAll({
      include : [{
        model : User,
        attributes : ['email','role', 'phoneNumber', 'address']
      }, {
        model : Company
      }]
    })
      .then((result) => {
        res.status(200).json({status : true, data : result})
      }).catch((err) => {
        next(err)
      });
  }

  static async addJobs(req, res, next){
    const t = await sequelize.transaction()
    try {
      const dataCompany = {
        name : req.body.name,
        companyLogo : req.body.companyLogo,
        location : req.body.location,
        email : req.body.email,
        description : req.body.descriptionCompany
      }
      const dataJob = {
        title : req.body.title,
        description : req.body.descriptionJob,
        authorId : req.user.id,
        jobType : req.body.jobType
      }
      const company = await Company.create(dataCompany, { transaction: t })
      dataJob.companyId = company.id

      const job = await Job.create(dataJob, { transaction: t })
      await t.commit()
      res.status(200).json({status : true, data : {
        id : job.id,
        title : job.title
      }})
    } catch (error) {
      await t.rollback()
      next(error)
    }
  }

  static destroyJob(req, res, next) {
    Job.destroy({
      where : {
        id : req.params.jobId
      }
    })
      .then((result) => {
        res.status(200).json({status : true, message : `success delete id ${req.params.jobId}`})
      }).catch((err) => {
        next(err)
      });
  }

  static detailJob(req, res,next){
    Job.findByPk(req.params.jobId)
      .then((result) => {
        if(!result){
          throw {status : 404, message : 'data not found'}
        }else{
          res.status(200).json({status :  true, data : result})
        }
      }).catch((err) => {
        next(err)
      });
  }

  static updateJob(req, res, next){
    console.log('masuk update')
  }
  // static async updateJob(req, res, next){
  //   const t = await sequelize.transaction()
  //   try {
  //     const dataCompany = {
  //       name : req.body.name,
  //       companyLogo : req.body.companyLogo,
  //       location : req.body.location,
  //       email : req.body.email,
  //       description : req.body.descriptionCompany
  //     }
  //     const dataJob = {
  //       title : req.body.title,
  //       description : req.body.descriptionJob,
  //       authorId : req.user.id,
  //       jobType : req.body.jobType
  //     }
  //     const company = await Company.update(dataCompany, { transaction: t })
  //     dataJob.companyId = company.id

  //     const job = await Job.create(dataJob, { transaction: t })
  //     await t.commit()
  //     res.status(200).json({status : true, data : {
  //       id : job.id,
  //       title : job.title
  //     }})
  //   } catch (error) {
  //     await t.rollback()
  //     next(error)
  //   }
  // }
}