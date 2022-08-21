import React, { Component } from "react";
import QRCode from "react-qr-code";
import btc from '../images/btc-logo.svg';
import {AiOutlineQrcode} from 'react-icons/ai';
import {FaBook} from 'react-icons/fa';



class Transactions extends Component {
    render() {
        return (
            <div class='send'>

                <div class="btc-logo-container">
                    <img class='btc-logo' alt='nologo' src={btc} width="100%"/>
                </div>

                <p class="title-text">TRANSACTIONS HISTORY</p>
                
              
            </div>
        )
    }
}

export default Transactions;
