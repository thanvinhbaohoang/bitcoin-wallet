import React from "react";
import { Component } from "react";

var bitcore = require('bitcore-lib');

class Wallet extends Component{
    constructor(props){
        super(props);
        this.wallet =''
        
    }
    generateMnemonic(){
        var Mnemonic = require('bitcore-mnemonic');
        var code = new Mnemonic(Mnemonic.Words.ENGLISH);
        console.log("=========== MNEMONIC =============")
        code.toString(); //12 words mnemonic phrases
        console.log(code)

        console.log("=========== XPRIV Key =============")
        var xpriv = code.toHDPrivateKey();
        console.log(xpriv);
        return "GenerateMnemonic() Called"
    }
    generateWallet(){
        console.log("BITCORE LIB")
        console.log(bitcore);

        console.log("PRIVATEKEY")
        var value = Buffer.from('correct horse battery staple');
        var hash = bitcore.crypto.Hash.sha256(value);
        var bn = bitcore.crypto.BN.fromBuffer(hash);
        console.log(bn);

        console.log("ADDRESS")
        var address = new bitcore.PrivateKey(bn).toAddress();
        console.log(address)   

        return 'generateWallet() Called' 
    }

    createTransaction() {
        var privateKey = new bitcore.PrivateKey('L1uyy5qTuGrVXrmrsvHWHgVzW9kKdrp27wBC7Vs6nZDTF2BRUVwy');
        var utxo = {
        "txId" : "115e8f72f39fad874cfab0deed11a80f24f967a84079fb56ddf53ea02e308986",
        "outputIndex" : 0,
        "address" : "17XBj6iFEsf8kzDMGQk5ghZipxX49VXuaV",
        "script" : "76a91447862fe165e6121af80d5dde1ecb478ed170565b88ac",
        "satoshis" : 50000
        };

        var transaction = new bitcore.Transaction()
        .from(utxo)
        .to('1Gokm82v6DmtwKEB8AiVhm82hyFSsEvBDK', 15000)
        .sign(privateKey);
    }


    
    render() {
        return(
            <div>
                <div> Generated Mnemonic {this.generateMnemonic()}</div>
                <div>Your address is {this.generateWallet()}</div>
            </div>
           
        )
    }
}

export default Wallet;