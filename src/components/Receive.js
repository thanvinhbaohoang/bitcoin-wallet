import React, { Component } from "react";
import QRCode from "react-qr-code";
import btc from '../images/btc-logo.svg';

class Receive extends Component {
    render() {
        return (
            <div class='receive'>

                <div class="btc-logo-container">
                    <img class='btc-logo' alt='nologo' src={btc} width="100%"/>
                </div>

                <p class="title-text">RECEIVE BTC</p>
                
                <div class="bitcoin-or-lightning-button">
                </div>

                <div class='QR-address'>
                    <QRCode value="Wallet Address Generated Here" />
                </div>

                <div class='text-address'>
                    <p>btc1qkjwdakljsdalksdalsndl</p>
                    <p class='secondary-text'>Tap To Copy Address</p>
                </div>
                
                <div class='generate-new-address-button button'>
                    <h3>Generate New Address</h3>
                </div>

            </div>
        )
    }
}

export default Receive;
