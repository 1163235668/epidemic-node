const express = require('express')
const Result = require('../models/Result')
const boom = require('boom')
const suspectPersonService = require('../services/suspectPerson')

const router = express.Router()


router.get('/SuspectPersonList', function(req, res, next) {
    suspectPersonService.suspectPersonList(req.query)
        .then(({ list, count, page, pageSize }) => {
            new Result({ list },'获取疑似人员列表成功',
                {
                    page: Number(page),
                    pageSize: Number(pageSize),
                    total: count || 0
                }).success(res)
        })
        .catch(err => {
            next(boom.badImplementation(err))
        })
})

router.post(
    '/addSuspectPerson',
    function(req, res, next) {
        suspectPersonService.addSuspectPerson(req.body)
            .then(() => {
                new Result().success(res)
            })
            .catch(err => {
                next(boom.badImplementation(err))
            })
    }
)

router.post(
    '/updateSuspectPerson',
    function(req, res, next) {
        suspectPersonService.updateSuspectPerson(req.body)
            .then(() => {
                new Result(null, '更新成功').success(res)
            })
            .catch(err => {
                next(boom.badImplementation(err))
            })
    }
)

router.get('/getSuspectPerson', function(req, res, next) {
    const { suspectPersonId } = req.query
    if (!suspectPersonId) {
        next(boom.badRequest(new Error('参数id不能为空')))
    } else {
        suspectPersonService.getSuspectPerson(suspectPersonId)
            .then(suspectPerson => {
                new Result(suspectPerson,'获取疑似人员成功').success(res)
            })
            .catch(err => {
                next(boom.badImplementation(err))
            })
    }
})

router.get('/deleteSuspectPerson', function(req, res, next) {
    const { suspectPersonId } = req.query;
    if (!suspectPersonId) {
        next(boom.badRequest(new Error('参数id不能为空')))
    } else {
        suspectPersonService.deleteSuspectPerson(suspectPersonId)
            .then(() => {
                new Result(null, '删除成功').success(res)
            })
            .catch(err => {
                next(boom.badImplementation(err))
            })
    }
})


module.exports = router