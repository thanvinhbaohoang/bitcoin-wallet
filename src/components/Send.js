import React, { Component } from "react";
import QRCode from "react-qr-code";
import btc from '../images/btc-logo.svg';
import {AiOutlineQrcode} from 'react-icons/ai';
import {FaAddressBook} from 'react-icons/fa';



class Send extends Component {
    render() {
        return (
            <div class='send'>

                <div class="btc-logo-container">
                    <img class='btc-logo' alt='nologo' src={btc} width="100%"/>
                </div>

                <p class="title-text">SEND BTC</p>
                
                <div class="send-amount-container">
                    <h2 class='send-amount-input'> 5000</h2>
                    <p>~$23000</p>
                </div>

                <div class="send-address-container">

                    <div class='address-tools'>
                        <FaAddressBook/> 
                        Address Book
                    </div>

                    <div class='send-address-bar'>
                        <input type="street" 
                            class="form-control" 
                            id="autocomplete" 
                            placeholder="Tap to paste address ... "/>         
                    </div>

                    <div class='send-button button'>
                        Send
                    </div>
                </div>
            </div>
        )
    }
}

export default Send;
