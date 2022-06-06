const Controller = require('../controllers/JobController')

const router = require('express').Router()

router.get('/', Controller.getAllJobs)

module.exports = router