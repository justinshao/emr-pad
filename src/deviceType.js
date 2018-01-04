//判断设备类型
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os';
    var bIsMidp = sUserAgent.match(/midp/i) == 'midp';
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
    var bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb';
    var bIsAndroid = sUserAgent.match(/android/i) == 'android';
    var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
    var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
    let deviceType;
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        deviceType='phone'
    } else {
        deviceType='pc'
    }
    return deviceType;
}

//实时判断屏幕宽度
function changeBodyWidth() {
    var width=document.body.clientWidth;
    window.onresize=function () {
        width = document.body.clientWidth;
    }
    return width;
}

const deviceType = browserRedirect();
const bodyWidth=changeBodyWidth();

export {
    deviceType,
    bodyWidth
}