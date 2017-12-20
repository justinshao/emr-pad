const root = '';
const credentials = 'same-origin';
const xHeaders = {
    'X-AuthToken': `${localStorage.getItem('sessionToken')}=${localStorage.getItem('sessionTokenValue')}`,
    'X-Requested-With': 'XMLHttpRequest'
};

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}
function checkApi(response) {
    return checkStatus(response).json().then(ret => {
        if (ret.Ok) {
            return ret.Data;
        } else {
            throw new Error(ret.Message);
        }
    });
}

const login = (usr, pwd) => {

    return fetch(`${root}/api/login`, {
        method: 'POST',
        credentials: credentials,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            usr: usr,
            pwd: pwd
        })
    }).then(checkApi);
}

const loginout = () => {
    return fetch(`${root}/api/loginout`, {
        method: 'POST',
        headers: xHeaders,
        credentials: credentials
    }).then(checkApi);
}

const loggedIn = () => {
    return fetch(`${root}/api/loggedIn`, {
        method: 'GET',
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi)
    .then(data => data == 'true');
}

const getWards = () => {
    return fetch(`${root}/api/Wards`, {
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

const getLoginInfo = () => {
    return fetch(`${root}/api/LoginInfo`, {
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

const getPats = (wardId) => {
    return fetch(`${root}/api/Pats?wardId=${wardId}`, {
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

const getPat = (regId) => {
    return fetch(`${root}/api/pat?regid=${regId}`, {
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

const getEmrCatalog = (regId) => {
    return fetch(`${root}/api/EmrCatalog?regid=${regId}`, {
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

const getInformedText = (chdId) => {
    return fetch(`${root}/api/EmrInformedText?chdid=${chdId}`, {
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

const getAudios = (chdId) => {
    return fetch(`${root}/api/Audios?chdid=${chdId}`, {
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

const getVideos = (chdId) => {
    return fetch(`${root}/api/Videos?chdid=${chdId}`, {
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

const getPictures = (chdId) => {
    return fetch(`${root}/api/Pictures?chdid=${chdId}`, {
        headers: xHeaders,
        credentials: credentials
    }).then(checkApi);
}

const deleteMedia = (id) => {
    return fetch(`${root}/api/DeleteMedia/${id}`, {
        headers: xHeaders,
        credentials: credentials
    }).then(checkApi);
}

const postEmrInformed = (chdId, data) => {
    return fetch(`${root}/api/PostEmrInformed`, {
        method: 'POST',
        credentials: credentials,
        headers: Object.assign({
            'Content-Type': 'application/json'
        }, xHeaders),
        body: JSON.stringify({
            chdId: chdId,
            data: data
        })
    }).then(checkApi);
}

const patSign = (chdId, signPic) => {
    return fetch(`${root}/api/PatSignBase64`, {
        method: 'POST',
        credentials: credentials,
        headers: Object.assign({
            'Content-Type': 'application/json'
        }, xHeaders),
        body: JSON.stringify({
            chdId: chdId,
            signPic: signPic
        })
    }).then(checkApi);
}

// 获取主菜单
const getMainMenu = (regId, sourceType) => {
    return fetch(`${root}/api/MainMenu?regId=${regId}&sourceType=${sourceType}`, {
        method: 'get',
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

// 获取住院信息
const getInHospitalInfo = (regId) => {
    return fetch(`${root}/api/InHospitalInfo?regId=${regId}`, {
        method: 'get',
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

// 获取病人信息
const getPersonInfo = (regId, sourceType) => {
    return fetch(`${root}/api/PersonInfo?regId=${regId}&sourceType=${sourceType}`, {
        method: 'get',
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

// 获取过敏信息
const getAllergyInfo = (regId, sourceType) => {
    return fetch(`${root}/api/AllergyInfo?regId=${regId}&sourceType=${sourceType}`, {
        method: 'get',
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

// 获取饮食医嘱信息
const getDietOrder = (regId) => {
    return fetch(`${root}/api/DietOrder?regId=${regId}`, {
        method: 'get',
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

// 获取关联住院信息
const getRelaInHospital = (regId) => {
    return fetch(`${root}/api/RelaInHospital?regId=${regId}`, {
        method: 'get',
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

// 获取轮转信息
const getInpatTurn = (regId) => {
    return fetch(`${root}/api/InpatTurn?regId=${regId}`, {
        method: 'get',
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

// 获取轮转信息
const getInpatChange = (regId) => {
    return fetch(`${root}/api/InpatChange?regId=${regId}`, {
        method: 'get',
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

// 获取账户信息
const getAccountInfo = (regId) => {
    return fetch(`${root}/api/AccountInfo?regId=${regId}`, {
        method: 'get',
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

// 获取检查报告
const getExamReport = (requestNo,sourceType) => {
    return fetch(`${root}/api/ExamReport?requestNo=${requestNo}&sourceType=${sourceType}`, {
        method: 'get',
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

// 获取化验报告
const getAssayRpt=(requestNo,sourceType)=>{
    return fetch(`${root}/api/AssayRpt?requestNo=${requestNo}&sourceType=${sourceType}`, {
        method: 'get',
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

// 获取病理报告
const getPathlgRpt=(requestNo,sourceType)=>{
    return fetch(`${root}/api/PathlgRpt?requestNo=${requestNo}&sourceType=${sourceType}`, {
        method: 'get',
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

// 获取护理单图片
const getNursingImage=(recordNo)=>{
    return `${root}/api/NursingImage?recordNo=${recordNo}`;
}

// 获取体温单图片
const getTemperatureSheetImage=(regId,week)=>{
    return `${root}/api/TemperatureSheetImage?regId=${regId}&week=${week}`;
}

// 获取住院医嘱
const getInpatOrder=(regId,timeType,selectFilter,orderKind)=>{
    return fetch(`${root}/api/InpatOrder?regId=${regId}&timeType=${timeType}&selectFilter=${selectFilter}&orderKind=${orderKind}`, {
        method: 'get',
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

// 获取中药医嘱
const getChnOrder=(regId,timeType,selectFilter,notDecoct)=>{
    return fetch(`${root}/api/ChnOrder?regId=${regId}&timeType=${timeType}&selectFilter=${selectFilter}&notDecoct=${notDecoct}`, {
        method: 'get',
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

// 获取诊断信息
const getDiag=(regId,sourceType)=>{
    return fetch(`${root}/api/Diag?regId=${regId}&sourceType=${sourceType}`, {
        method: 'get',
        credentials: credentials,
        headers: xHeaders
    }).then(checkApi);
}

export {
    login,
    loginout,
    loggedIn,
    getWards,
    getLoginInfo,
    getPats,
    getPat,
    getEmrCatalog,
    getInformedText,
    getAudios,
    getVideos,
    getPictures,
    deleteMedia,
    postEmrInformed,
    patSign,
    getMainMenu,
    getInHospitalInfo,
    getPersonInfo,
    getAllergyInfo,
    getDietOrder,
    getRelaInHospital,
    getInpatTurn,
    getInpatChange,
    getAccountInfo,
    getExamReport,
    getAssayRpt,
    getPathlgRpt,
    getNursingImage,
    getTemperatureSheetImage,
    getInpatOrder,
    getChnOrder,
    getDiag
}