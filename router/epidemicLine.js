const express = require('express')
const Result = require('../models/Result')
const boom = require('boom')
const epidemicLineService = require('../services/epidemicLine')

const router = express.Router()

router.get('/getConfirmData', function(req, res, next) {
    epidemicLineService.getConfirmData()
        .then((confirmList) => {
            new Result(confirmList,'获取数据成功').success(res)
        })
        .catch(err => {
            console.log('/epidemicLine/getData', err)
            next(boom.badImplementation(err))
        })
})
module.exports = router