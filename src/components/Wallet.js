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
        var newXpriv = code.toHDPrivateKey();

        // Generate Address
        var value = Buffer.from(newMnemonicPhrase);
        var hash = bitcore.crypto.Hash.sha256(value);
        var bn = bitcore.crypto.BN.fromBuffer(hash);
        var privateKey = new bitcore.PrivateKey(bn);
        var address = new bitcore.PrivateKey(bn).toAddress();
        address = address.toString()

        // Update State
        this.setState({
            mnemonicPhrase : newMnemonicPhrase,
            xpriv: newXpriv.toString(),
            privateKey: privateKey.toString(),
            walletAddress: address.toString(),
        })

        return;

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
                    Address: <br/> {this.state.walletAddress}
                </p>
           </div>
            )
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
                {/* <div> <h3>Generated Mnemonic: </h3> <br/> {this.generateNewWallet()}</div> */}
                <button class='generate-mnemonic-button' onClick={this.generateNewWallet}>
                    <p>Click to New Wallet</p>
                </button>

                {this.renderMnemonicPhrase()}
            </div>
           
        )
    }
}

export default Wallet;