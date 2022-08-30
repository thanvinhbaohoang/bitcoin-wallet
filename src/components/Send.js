import React, { Component } from "react";
import QRCode from "react-qr-code";
import btc from '../images/btc-logo.svg';
import {AiOutlineQrcode} from 'react-icons/ai';
import {FaBook} from 'react-icons/fa';



class Send extends Component {
    constructor(props){
        super(props);
        this.state={
            btcSendAmount : 0,
            dollarValue : 0.00,
        }
        this.updateSendAmount = this.updateSendAmount.bind(this);
        this.setSendAddress = this.setSendAddress.bind(this) 
 
    }

    // Update State and Calculate Dollar Amount
    updateSendAmount(event){
        const btcUsdPrice = 23000;
        console.log(event.target.value*btcUsdPrice)
        let dollarValue = event.target.value*btcUsdPrice

        // Update State
        this.setState({
            btcSendAmount: event.target.value,
            dollarValue: dollarValue.toFixed(2)
        })
    }

    setSendAddress(event){
        this.setState({
            sendAddress : event.target.value
        })
    }

    isValidAddress(inputAddress){
        
    }


    render() {
        return (
            <div class='send'>

                <div class="btc-logo-container">
                    <img class='btc-logo' alt='nologo' src={btc} width="100%"/>
                </div>

                <p class="title-text">SEND BTC</p>
                
                <div class="send-amount-container">
                    <input type="number" 
                            class="send-amount-input" 
                            id="btcSendAmount"
                            placeholder="0.000"
                            min="0"
                            defaultValue={0}
                            onChange={this.updateSendAmount}/>         
                
                    <div class='dollar-value'>
                        <span class='small-dollar-sign'>~$</span><h4>{this.state.dollarValue}</h4>
                    </div>
                </div>

                <div class="send-address-container">

                    <div class='address-book'>
                        <FaBook/> 
                        Address Book
                    </div>

                    <div class='send-address-bar'>
                        <div class='input-bar'>
                            <input type="street" 
                            class="form-control" 
                            id="sendAmount" 
                            placeholder="Send to this address ... "
                            onChange={this.setSendAddress}/>         
                
                            <AiOutlineQrcode class='qr-scan-button'/>
                        </div>

                         </div>

                    <div class='button'>
                        <h3>Send</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Send;
