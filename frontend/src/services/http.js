import axios from 'axios';

BACKEND_URL = 'http://127.0.0.1:8000'

export async function DrugUsages(user) {
    return await axios.get(`${BACKEND_URL}/drugusage/`, {
        params: {
            user: user
        }
    });
}

export async function timeTillNextDrugUse(drugUsages) {
    timeSinceLast = (
        Date.now() - new Date(drugUsages[drugUsages.length-1]).getTime()
    );

    return drugUsages.length * 6*60*60*1000 - timeSinceLast
}

export async function offences(user) {
    return await axios.get(`${BACKEND_URL}/drugusage/`, {
        user: user,
        advised: false
    }).length;
}

export async function checkupDoneToday(user) {
    checkups = await axios.get(`${BACKEND_URL}/checkup/`, {
        user: user
    });
    latest = checkups[checkups.length-1];
    date = new Date(latest.data.date);
    return (new Date(Date.now()).getDate() == date.getDate());
}

export async function calc(user) {
    profile = await axios.get(user).data;
    return 2;
}