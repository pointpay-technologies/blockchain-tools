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
    calculate(give: boolean) {
            for (let meth in method) {
                for (let keys in paywayMethod) {
                    let arr = paywayMethod[keys];
                    for (let payMethod of arr) {
                        for (let crypto of cryptoCurrency) {
                            let params: any = {
                                direction: meth,
                                payway: payMethod,
                            };
                            let isCrypto: boolean;
                            if (meth === "buy") {
                                params.giveCurrency = keys;
                                params.receiveCurrency = crypto;
                                isCrypto = false;
                            } else {
                                params.receiveCurrency = keys;
                                params.giveCurrency = crypto;
                                isCrypto = true
                            }

                            if (give) {
                                params.giveOrReceive = 'giveAmount';
                            } else {
                                params.giveOrReceive = 'receiveAmount';
                            }

                            // set different amounts: 0, normal and too large:
                            for (let diffAmount in setAmount) {
                                //if there is property in setAmount
                                if (isCrypto && utils.getNested(setAmount, diffAmount, "crypto", [crypto])) {
                                    console.log('first: ' + setAmount[diffAmount]["crypto"][crypto]);
                                    params.amount = setAmount[diffAmount]["crypto"][crypto];
                                } else if (isCrypto && utils.getNested(setAmount, diffAmount, "crypto")) {
                                    console.log('second: ' + setAmount[diffAmount]["crypto"]);
                                    params.amount = setAmount[diffAmount]["crypto"];
                                } else if (!isCrypto && utils.getNested(setAmount, diffAmount, "fiat", keys)) {
                                    console.log('third' + setAmount[diffAmount]["fiat"][keys]);
                                    params.amount = setAmount[diffAmount]["fiat"][keys];
                                } else if (!isCrypto && utils.getNested(setAmount, diffAmount, "fiat")) {
                                    console.log('forth' + setAmount[diffAmount]["crypto"]);
                                    params.amount = setAmount[diffAmount]["fiat"];
                                } else {
                                    console.log('else' + setAmount[diffAmount]);
                                    params.amount = setAmount[diffAmount];
                                }
                            }
                            exchangeAPI.calculate(params);
                        }
                    }
                }
            }
        }
}

