import axios from 'axios';

BACKEND_URL = 'http://127.0.0.1:8000'

async function DrugUsages(user) {
    return await axios.get(`${BACKEND_URL}/drugusage/`, {
        params: {
            user: user
        }
    });
}

async function timeTillNextDrugUse(drugUsages) {
    timeSinceLast = (
        Date.now() - new Date(drugUsages[drugUsages.length-1]).getTime()
    );

    return drugUsages.length * 6*60*60*100 - timeSinceLast
}

async function offences(user) {
    return await axios.get(`${BACKEND_URL}/drugusage/`, {
        user: user,
        advised: false
    }).length;
}

async function checkupDoneToday(user) {
    checkups = await axios.get(`${BACKEND_URL}/checkup/`, {
        user: user
    });
    latest = checkups[checkups.length-1]
    date = new Date(latest.data.date)
    return (new Date(Date.now()).getDate() == date.getDate())
}

async function calc(user) {
    profile = await axios.get(user).data;
    return 2;
}

exports.DrugUsages = DrugUsages;
exports.timeTillNextDrugUse = timeTillNextDrugUse;
exports.offences = offences;
exports.checkupDoneToday = checkupDoneToday;
exports.calc = calc;