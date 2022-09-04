import React, { Component, useState, useRef} from "react";
import btc from '../images/btc-logo.svg';
import { TiWarningOutline } from 'react-icons/ti';



const bitcore = require('bitcore-lib');

class NewWalletPage extends Component {
    constructor(props){
        super(props);

        this.generateNewWallet = this.generateNewWallet.bind(this) 
        this.renderSeedPhrase= this.renderSeedPhrase.bind(this)
        this.state = {
            mnemonicArray : []
        }
    }

    componentDidMount(){
        console.log("componentDidMount")
        this.generateNewWallet()
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
        // var address = privateKey.toAddress(); [We Can use This but not recommended for security]
        var address= publicKey.toAddress();
        address = address.toString()
        const mnemonicArray = newMnemonicPhrase.split(' ');


        // Update State
        this.setState({
            mnemonicArray: mnemonicArray,
            mnemonicPhrase : newMnemonicPhrase,
            xpriv: xpriv.toString(),
            privateKey: privateKey.toString(),
            publicKey: publicKey.toString(),
            walletAddress: address.toString(),
        })

    }

    // Checkbox for Confirmation of Writing down and securing seed
    Checkbox = ({ label, onChange }) => {
        const [isChecked, setChecked] = useState(true);

        const handleChange = () => {
            // Function
            setChecked(!isChecked);
            console.log("isChecked: ", isChecked);
        }

        
        const handleClick = () => {
            console.log(!isChecked)
            this.disabled = true;
        }
        

        return (
        <div>


            <div class='button' 
            toggleState={isChecked}
            onClick={this.generateNewWallet} 
            >
                <h3>Start Using My New Wallet</h3>
            </div>
        </div>
        );
    };


    renderSeedPhrase(){

        
        const seedWords = [
            {id: 1, word: 'Alice'},
            {id: 2, word: 'Bob'},
            {id: 3, word: 'Carl'},
            {id: 4, word: 'Dean'},
            {id: 5, word: 'Ethan'},
            {id: 6, word: 'Bob'},
            {id: 7, word: 'Carl'},
            {id: 8, word: 'Dean'},
            {id: 9, word: 'Ethan'},
            {id: 10, word: 'Bob'},
            {id: 11, word: 'Carl'},
            {id: 12, word: 'Dean'},
          ];
        
          return (
            <div class="seed-container">
                {seedWords.map(item => {
                    return (
                    <div key={item.id} class='seed-item'>
                        <p class='seed-number'>{item.id}</p>
                        <h2 class='seed-word'>{item.word}</h2>        
                    </div>
                    );
                })}
            </div>
          );
    }



    render() {
        return (
            <div class='send'>

                <div class="btc-logo-container">
                    <img class='btc-logo' alt='nologo' src={btc} width="100%"/>
                </div>

                <h2>Your Mnemonic Seed Phrase</h2>

                <div class="seed-phrase-wrapper">
                    {this.renderSeedPhrase()}
                </div>
              
                <div class='seed-warning'>
                   <TiWarningOutline class='warning-logo'/> Keep this private! Someone who has access to this seed phrase will have access to your funds.
                </div>

                <div class = 'seed-checkbox-container'>
                    <this.Checkbox class='checkbox'/>
                </div>
                
                {/* <this.ContinueButton boxChecked={this.Checkbox.boxCheckedStatus}/> */}
            </div>
        )
    }
}

export default NewWalletPage;
