import { login, loginout } from './service';

const auth = {
    isAuthenticated: document.cookie && document.cookie.indexOf(localStorage.getItem('sessionToken')) >= 0,
    authenticate(usr, pwd, cb) {
        login(usr, pwd).then(ret => {
            localStorage.setItem('sessionToken', ret.Token);
            localStorage.setItem('sessionTokenValue', ret.Value);
            this.isAuthenticated = true;

            cb();
         }).catch((e) => cb(e.message));
    },
    signout(cb) {
        loginout().then(() => {
            localStorage.removeItem('sessionToken');
            localStorage.removeItem('sessionTokenValue');
            this.isAuthenticated = false;

            cb();
         }).catch((e) => cb(e.message));
    }
}

export default auth;