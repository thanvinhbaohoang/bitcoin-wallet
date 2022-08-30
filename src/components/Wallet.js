import React from "react";
import { Component } from "react";
const bitcore = require('bitcore-lib');

class Wallet extends Component{
    constructor(props){
        super(props);
        this.state = {};

        // Binding this keyword 
        this.generateNewWallet = this.generateNewWallet.bind(this) 

    }

    generateNewWallet(){ 
        // Generate Mnemonic Phrase
        const Mnemonic = require('bitcore-mnemonic');
        const code = new Mnemonic(Mnemonic.Words.ENGLISH);
        const newMnemonicPhrase = code.toString(); //12 words mnemonic phrases
        var xpriv = code.toHDPrivateKey(); //Extended Private Key (Used to create PrivateKeys and PubKeys)

        // Generate Address from XPriv
        var value = Buffer.from(newMnemonicPhrase);
        var hash = bitcore.crypto.Hash.sha256(value);
        var bn = bitcore.crypto.BN.fromBuffer(hash);
        var privateKey = new bitcore.PrivateKey(bn);
        var publicKey = privateKey.toPublicKey();

        // Multiple Ways To Generate Address
        // var address = privateKey.toAddress(); [We Can use This but not sure ab security]
        var address= publicKey.toAddress();
        address = address.toString()

        // Update State
        this.setState({
            mnemonicPhrase : newMnemonicPhrase,
            xpriv: xpriv.toString(),
            privateKey: privateKey.toString(),
            publicKey: publicKey.toString(),
            walletAddress: address.toString(),
        })

        return;

    }

    checkValidPrivateKey() {
        // // validate an address
        // if (PrivateKey.isValid(input)){
        // }
  
        // // get the specific validation error that can occurred
        // var error = PrivateKey.getValidationError(input, Networks.livenet);
        // if (error) {
        //     // handle the error
        // }
    }

    checkValidPublicKey(){
        // if (PublicKey.isValid('02a1633cafcc01ebfb6d78e39f687a1f0995c62fc95f51ead10a02ee0be551b5dc')){
        //     // valid public key
        //   }
    }

    checkValidAddress(input){
        // // validate an address
        // if (Address.isValid(input){
        //     ...
        // }
        
        // // validate that an input field is a valid testnet address
        // if (Address.isValid(input, Networks.testnet){
        //     ...
        // }
        
        // // validate that an input field is a valid livenet pubkeyhash
        // if (Address.isValid(input, Networks.livenet, Address.PayToPublicKeyHash){
        //     ...
        // }
        
        // // get the specific validation error that can occurred
        // var error = Address.getValidationError(input, Networks.testnet);
        //     if (error) {
        //     // handle the error
        //     }
        // }
    }

    createTransaction(){

        // var utxo = new bitcore.Transaction.UnspentOutput({
        //     "txid" : "a0a08e397203df68392ee95b3f08b0b3b3e2401410a38d46ae0874f74846f2e9",
        //     "vout" : 0,
        //     "address" : "mgJT8iegL4f9NCgQFeFyfvnSw1Yj4M5Woi",
        //     "scriptPubKey" : "76a914089acaba6af8b2b4fb4bed3b747ab1e4e60b496588ac",
        //     "amount" : 0.00070000
        //   });
        //   var utxo = new UnspentOutput({
        //     "txId" : "a0a08e397203df68392ee95b3f08b0b3b3e2401410a38d46ae0874f74846f2e9",
        //     "outputIndex" : 0,
        //     "address" : "mgJT8iegL4f9NCgQFeFyfvnSw1Yj4M5Woi",
        //     "script" : "76a914089acaba6af8b2b4fb4bed3b747ab1e4e60b496588ac",
        //     "satoshis" : 70000
        //   });
   
        // var transaction = new Transaction()
        //     .from(utxos)          // Feed information about what unspent outputs one can use
        //     .to(to_address, amount)  // Add an output with the given amount of satoshis
        //     .change(change_address)      // Sets up a change address where the rest of the funds will go
        //     .sign(privkeySet)     // Signs all the inputs it can
    }

    signBTCMessage(){
        // var Message = require('bitcore-message');

        // var privateKey = new bitcore.PrivateKey('L23PpjkBQqpAF4vbMHNfTZAb3KFPBSawQ7KinFTzz7dxq6TZX8UA');
        // var message = new Message('This is an example of a signed message.');

        // var signature = message.sign(privateKey);
    }

    verifyBTCMessage()
    {
        // var Message = require('bitcore-message');

        // var address = '13Js7D3q4KvfSqgKN8LpNq57gcahrVc5JZ';
        // var signature = 'IBOvIfsAs/da1e36W8kw1cQOPqPVXCW5zJgNQ5kI8m57FycZXdeFmeyoIqJSREzE4W7vfDmdmPk0HokuJPvgPPE=';
        
        // var verified = new Message('This is an example of a signed message.').verify(address, signature);
    }

    createOPReturnTransaction()
    {
        // var privateKey = new bitcore.PrivateKey('L1uyy5qTuGrVXrmrsvHWHgVzW9kKdrp27wBC7Vs6nZDTF2BRUVwy');
        // var utxo = {
        //   "txId" : "115e8f72f39fad874cfab0deed11a80f24f967a84079fb56ddf53ea02e308986",
        //   "outputIndex" : 0,
        //   "address" : "17XBj6iFEsf8kzDMGQk5ghZipxX49VXuaV",
        //   "script" : "76a91447862fe165e6121af80d5dde1ecb478ed170565b88ac",
        //   "satoshis" : 50000
        // };
        
        // var transaction = new bitcore.Transaction()
        //     .from(utxo)
        //     .addData('bitcore rocks') // Add OP_RETURN data
        //     .sign(privateKey);    
    }

    renderMnemonicPhrase(){
        return (
           <div>
                <h1>Your Wallet Info</h1>
                <p>
                    Mnemonic: <br/>{this.state.mnemonicPhrase}
                </p>

                <p>
                    XPriv: <br/>{this.state.xpriv}
                </p> 

                <p>
                    PrivateKey: <br/>{this.state.privateKey}
                </p>
                <p>
                    PublicKey: <br/>{this.state.publicKey}
                </p>
                <p>
                    Address: <br/> {this.state.walletAddress}
                </p>
           </div>
            )
    }

 

    
    render() {
        return(
            <div class='wallet'>
                {/* <div> <h3>Generated Mnemonic: </h3> <br/> {this.generateNewWallet()}</div> */}
                <button class='generate-mnemonic-button' onClick={this.generateNewWallet}>
                    <p>Generate New Wallet</p>
                </button>

                {this.renderMnemonicPhrase()}
            </div>
           
        )
    }
}

export default Wallet;