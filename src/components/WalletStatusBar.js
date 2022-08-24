import { Component } from "react";
import btc from '../images/btc-logo.svg';

class WalletStatusBar extends Component {
    constructor(props){
        super(props);
        this.state={
            walletConnected: false,
        }
    }

    renderConnectButton(){
        return(
            <div class='connect-wallet-button'>
                <h4>Connect Wallet</h4>
            </div>
        )
    }

    renderWalletStatus(){
        return(
            <div class='wallet-info'>
                <h4 class="wallet-balance">3294 SATS</h4>
                <div class='current-blockchain'>
                    <img class='btc-logo' alt='nologo' src={btc} width="85%"/>
                </div>
                <p class='wallet-pubkey'> bc1la....aaijsd</p>
                <div class='profile-picture'>
                </div>
            </div>
        )
    }


    render() {
        return (
            <div class='wallet-status-bar'>
                {/* {this.renderConnectButton()} */}
                {this.renderWalletStatus()}
            </div>
        )
    }
}

export default WalletStatusBar;

