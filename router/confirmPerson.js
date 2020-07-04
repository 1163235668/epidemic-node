const express = require('express')
const Result = require('../models/Result')
const confirmPerson = require('../models/confirmPerson')
const boom = require('boom')
const {decode} = require('../utils')
const confirmPersonService = require('../services/confirmPerson')

const router = express.Router()


router.get('/ConfirmPersonList', function(req, res, next) {
    confirmPersonService.confirmPersonList(req.query)
        .then(({ list, count, page, pageSize }) => {
            new Result({ list },'获取确诊人员列表成功',
                {
                    page: Number(page),
                    pageSize: Number(pageSize),
                    total: count || 0
                }).success(res)
        })
        .catch(err => {
            console.log('/confirmPerson/ConfirmPersonList', err)
            next(boom.badImplementation(err))
        })
})

router.post(
    '/addConfirmPerson',
                function(req, res, next) {
                    confirmPersonService.addConfirmPerson(req.body)
                        .then(() => {
                new Result().success(res)
            })
            .catch(err => {
                console.log('/confirmPerson/addConfirmPerson', err)
                next(boom.badImplementation(err))
            })
    }
)

router.post(
    '/updateConfirmPerson',
    function(req, res, next) {
        confirmPersonService.updateConfirmPerson(req.body)
            .then(() => {
                new Result(null, '更新成功').success(res)
            })
            .catch(err => {
                next(boom.badImplementation(err))
            })
    }
)

router.get('/getConfirmPerson', function(req, res, next) {
    const { confirmPersonId } = req.query
    if (!confirmPersonId) {
        next(boom.badRequest(new Error('参数id不能为空')))
    } else {
        confirmPersonService.getConfirmPerson(confirmPersonId)
            .then(confirmPerson => {
                new Result(confirmPerson,'获取确诊人员成功').success(res)
            })
            .catch(err => {
                console.log('/confirmPerson/getConfirmPerson', err)
                next(boom.badImplementation(err))
            })
    }
})

router.get('/deleteConfirmPerson', function(req, res, next) {
    const { confirmPersonId } = req.query;
    if (!confirmPersonId) {
        next(boom.badRequest(new Error('参数id不能为空')))
    } else {
        confirmPersonService.deleteConfirmPerson(confirmPersonId)
            .then(() => {
                new Result(null, '删除成功').success(res)
            })
            .catch(err => {
                next(boom.badImplementation(err))
            })
    }
})


module.exports = router