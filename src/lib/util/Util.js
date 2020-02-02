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
    validateDates(start, end) {
        let x;
    if (start > end) {
        return false;
    }
    if (!start) {
        x[Op.gte] = start;
        return x;
    }
    if (!end) {
        x[Op.lte] = end;
        return x;
    }
}
     sumAll(arr) {
        let newArr = arr.sort((a, b) => a-b);
        //make new arr:
        const updatedArr =[];
        for(let i=newArr[0]; i<=newArr[1]; i++) {
            updatedArr.push(i);
        }
            return updatedArr.reduce((sum, item) => sum+item)
    }
    sumToCurrentCrypto(n) {
        if (n == 1) return 1;
        return n + sumTo(n - 1);
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
    compareObjectsByKeys(collection, source) {
        let arr = [];
        collection.forEach(item => {
            //console.log(item);
            let truVal = [];
            for (let keys in source) {
                truVal.push(item[keys] === source[keys]);
            }
            if (truVal.every(item => item === true)) {
                arr.push(item);
            }
        });
        return arr;
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

