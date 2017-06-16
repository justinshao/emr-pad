
const logger = {
    log(info){
        if(global.native){
            global.native.toast(info);
        }else{
            global.console.log(info);
        }
    },

    error(err){
        if(global.native){
            global.native.error(err);
        }else{
            global.console.error(err);
        }
    }
}

export default logger;
