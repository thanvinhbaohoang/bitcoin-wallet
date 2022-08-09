import React from "react";
import { Component } from "react";


class Wallet extends Component{
    constructor(props){
        super(props);
        this.wallet =''
    }

    generateWallet(){
        var bitcore = require('bitcore-lib');
        var privateKey = new bitcore.PrivateKey();
        var address = privateKey.toAddress();
        return address
    }
    render() {
        return(
            <div>Your address is {this.generateWallet()}</div>
        )
    }
}

export default Wallet;