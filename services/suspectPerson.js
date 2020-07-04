const db = require('../db')

async function suspectPersonList(query) {
    const {
        name,
        page = 1,
        pageSize = 10,
    } = query
    const offset = (page - 1) * pageSize;
    let suspectPersonSql = `select * from suspect_person`;
    let where = 'where';
    name && (where = db.andLike(where, 'name', name))
    if(where !== 'where'){
        suspectPersonSql = `${suspectPersonSql} ${where}`;
    }
    suspectPersonSql = `${suspectPersonSql} limit ${pageSize} offset ${offset}`
    let countSql = `select count(*) as count from suspect_person`;
    if (where !== 'where') {
        countSql = `${countSql} ${where}`
    }
    const count = await db.querySql(countSql)
    const list = await db.querySql(suspectPersonSql);
    return {list, count: count[0].count, page, pageSize};
}

function addSuspectPerson(suspectPerson) {
    return new Promise(async (resolve, reject) => {
        try {
            await db.insert(suspectPerson, 'suspect_person')
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

function updateSuspectPerson(suspectPerson) {
    return new Promise(async (resolve, reject) => {
        try {
            await db.update(suspectPerson, 'suspect_person', `where id='${suspectPerson.id}'`)
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

async function getSuspectPerson(suspectPersonId) {
    const suspectPersonSql = `select * from suspect_person where id='${suspectPersonId}'`
    const suspectPerson = await db.queryOne(suspectPersonSql)
    if (suspectPerson) {
        return suspectPerson
    } else {
        throw new Error('确诊人员不存在')
    }
}

function deleteSuspectPerson(suspectPersonId) {
    return new Promise(async (resolve, reject) => {
        try {
            const sql = `DELETE FROM suspect_person WHERE id='${suspectPersonId}'`
            db.querySql(sql).then(() => {
                resolve()
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    suspectPersonList,
    getSuspectPerson,
    addSuspectPerson,
    updateSuspectPerson,
    deleteSuspectPerson
}