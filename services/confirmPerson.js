const db = require('../db')
const confirmPerson = require('../models/confirmPerson')

async function confirmPersonList(query) {
    const {
        name,
        page = 1,
        pageSize = 10,
    } = query
    const offset = (page - 1) * pageSize;
    let confirmPersonSql = `select * from confirm_person`;
    let where = 'where';
    name && (where = db.andLike(where, 'name', name))
    if(where !== 'where'){
        confirmPersonSql = `${confirmPersonSql} ${where}`;
    }
    confirmPersonSql = `${confirmPersonSql} limit ${pageSize} offset ${offset}`
    let countSql = `select count(*) as count from confirm_person`;
    if (where !== 'where') {
        countSql = `${countSql} ${where}`
    }
    const count = await db.querySql(countSql)
    const list = await db.querySql(confirmPersonSql);
    return {list, count: count[0].count, page, pageSize};
}

function addConfirmPerson(confirmPerson) {
    return new Promise(async (resolve, reject) => {
        try {
            await db.insert(confirmPerson, 'confirm_person')
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

function updateConfirmPerson(confirmPerson) {
    return new Promise(async (resolve, reject) => {
        try {
            await db.update(confirmPerson, 'confirm_person', `where id='${confirmPerson.id}'`)
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

async function getConfirmPerson(confirmPersonId) {
    const confirmPersonSql = `select * from confirm_person where id='${confirmPersonId}'`
    const confirmPerson = await db.queryOne(confirmPersonSql)
    if (confirmPerson) {
        return confirmPerson
    } else {
        throw new Error('确诊人员不存在')
    }
}

function deleteConfirmPerson(confirmPersonId) {
    return new Promise(async (resolve, reject) => {
        try {
            const sql = `DELETE FROM confirm_person WHERE id='${confirmPersonId}'`
            db.querySql(sql).then(() => {
                resolve()
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    confirmPersonList,
    getConfirmPerson,
    addConfirmPerson,
    updateConfirmPerson,
    deleteConfirmPerson
}