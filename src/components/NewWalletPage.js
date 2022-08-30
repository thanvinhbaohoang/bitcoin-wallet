import React, { Component } from "react";
import btc from '../images/btc-logo.svg';
import { TiWarningOutline } from 'react-icons/ti';

class NewWalletPage extends Component {
    constructor(props){
        super(props);
        this.state={
            seedWords : ["one", "two", "three", "four", "fiv" , "six", 
            "sev", "eight", "nine", "ten", "elev", "tewlse"]
        }

       this.renderSeedPhrase= this.renderSeedPhrase.bind(this)
    }

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
                    I have written this seed down and kept it in a secure area                
                </div>
                <div class='button'>
                        <h3>Start Using My New Wallet</h3>
                </div>
            </div>
        )
    }
}

export default NewWalletPage;
