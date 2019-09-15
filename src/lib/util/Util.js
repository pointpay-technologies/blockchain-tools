class Util {
    randomString(length = 10, chars = null) {
        let rStr = '';
        if (!chars)
            chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let charsLen = chars.length;
        for (let i = 0; i < charsLen; i++) {
            rStr += chars.charAt(Math.floor(Math.random() * charsLen));
        }
        return rStr;
    }
}

module.exports = Util;