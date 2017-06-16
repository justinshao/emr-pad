let patSignResultListener = null;

const mobileApi = {
    setPatSignResultListener(listener){
        patSignResultListener = listener;
    },
    removePatSignResultListener(){
        patSignResultListener = null;
    },

    notifyPatSignResult(ok, emrId){
        if(typeof patSignResultListener == 'function'){
            patSignResultListener(ok, emrId);
        }
    }
}

global.mobileApi = mobileApi;

export default mobileApi;