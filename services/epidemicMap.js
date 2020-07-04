const db = require('../db')

async function getData() {
    let sql = `select confirmProvince AS name,COUNT(id) AS value from confirm_person  GROUP BY confirmProvince`;
    const list = await db.querySql(sql);
    return {list};
}

module.exports = {
    getData
}