let abi = require('./ERC20Abi');
let EthContractCaller = require('./EthContractCaller');
const web3 = require('web3');
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

    async transfer(contractAddress, value, data) {
        let myContract = new web3.eth.Contract(abi, contractAddress);
        let data = myContract.methods.transfer(toAddress, value).encodeABI();
        let rawTx = {
             "nonce": web3.utils.toHex(nonce),
              "gasPrice": "0x3b9aca00",
                "gasLimit": web3.utils.toHex(gasLimit),
                "to": contractAddress,
                 "value": value,
                 "data": data,
        }
        const tx = new Tx(rawTx)
        tx.sign(privateKey)
        let serializedTx = "0x" + tx.serialize().toString('hex');
        web3.eth.sendSignedTransaction(serializedTx).on('transactionHash', function (txHash) {

        }).on('receipt', function (receipt) {
        }).on('confirmation', function (confirmationNumber, receipt) {
        }).on('error', function (error) {

        });
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
