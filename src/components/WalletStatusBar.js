import { Component } from "react";

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
                <h4>3294 SATS</h4>
                <div class='current-blockchain'></div>
                <p class='wallet-pubkey'></p>
                <div class='profile-picture'></div>
            </div>
        )
    }


    render() {
        return (
            <div class='wallet-status-bar'>
                {this.renderConnectButton()}
            </div>
        )
    }
}

export default WalletStatusBar;

