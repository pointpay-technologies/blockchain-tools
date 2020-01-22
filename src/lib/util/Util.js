export default class Util {
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

    waitForAll(functions, wait) {
        Promise.all(functions.map(
            fn => new Promise(then => {
                fn();
                then();
            }))
        ).then(then => wait());
    }

    randomEmail(emailDomain) {
        return this.randomString() + emailDomain;
    }
   cryptolist(arg1, arg2, ...argN) {
        let listCryptos = [];
        listCryptos.push(arg1);
        listCryptos.push(arg2);
        return listCryptos;
    };
    filterRange(arr, a, b) {
    return arr.filter(item => item>=a && item<=b);
}
    
}
