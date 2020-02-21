let abi = require('./ERC20Abi');
let EthContractCaller = require('./EthContractCaller');

class ERC20Caller {
    /**
     *
     * @param address
     * @param EthContractCaller contractCaller
     */
    constructor(web3, address, contractCaller, fromAddress, fromPrivate, toAddress) {
        this.address = address;
        this.contractCaller = contractCaller;
        this.fromAddress = fromAddress;
        this.fromPrivate = fromPrivate;
        this.toAddress = toAddress;
    }

    async transfer() {

    }
    
    async transferFrom() {

    }

    async increaseAllowance() {

    }

    async balanceOf() {
        
    }

    async burnFrom() {

    }

    async decreaseAllowance() {

    }

    async nonpayable() {

    }

    async getNow() {
        
    }

    async allowance() {
        
    }
}
