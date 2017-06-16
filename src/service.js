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
        if(ret.Ok){
            return ret.Data;
        }else{
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
    })
    .then(checkApi)
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
    patSign
}