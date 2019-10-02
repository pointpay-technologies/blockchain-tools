class Util {
    randomString(length = 10, chars = null) {
        let ret = '';
        if (!chars)
            chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let charsLen = chars.length;
        for (let i = 0; i < charsLen; i++) {
            ret += chars.charAt(Math.floor(Math.random() * charsLen));
        }
        return ret;
    }
    waitForAll(functions, wait){
        Promise.all(functions.map(
            fn => new Promise(then => {
                fn();
                then();
            }))
        ).then(then => wait());
    }
}

module.exports = Util;