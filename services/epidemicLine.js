const db = require('../db')

async function getConfirmData() {
    let confirmSql = `SELECT count(*) AS count,confirmDate AS time FROM confirm_person GROUP BY time ORDER BY time ASC`;
    const confirmList = await db.querySql(confirmSql);
    return confirmList;
}

async function getSuspectData() {
    let suspectSql = `SELECT count(*) AS count,suspectDate AS time FROM suspect_person GROUP BY time ORDER BY time ASC`;
    const suspectList = await db.querySql(suspectSql);
    return suspectList;
}

module.exports = {
    getConfirmData,
    getSuspectData
}