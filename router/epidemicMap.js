const express = require('express')
const Result = require('../models/Result')
const boom = require('boom')
const epidemicMapService = require('../services/epidemicMap')

const router = express.Router()

router.get('/getData', function(req, res, next) {
    epidemicMapService.getData()
        .then(({ list }) => {
            new Result({ list },'获取数据成功').success(res)
        })
        .catch(err => {
            console.log('/epidemicMap/getData', err)
            next(boom.badImplementation(err))
        })
})
module.exports = router