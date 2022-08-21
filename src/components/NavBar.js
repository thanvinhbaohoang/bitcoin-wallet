import React, { Component } from "react";


class NavBar extends Component {
    render() {
        return (
            <div class='nav-bar'>
                <a class='nav-logo' href='#hero'>
                    <h1>Spectre Wallet</h1>
                </a>

                <div class='nav-items'>
                    <a href ='#about'>
                        <p class='nav-item'> Send </p>
                    </a>
                    <a href ='#experience'>
                        <p class='nav-item'> Receive </p>
                    </a>
                    <a href ='#works'>
                        <p class='nav-item'> Transactions </p>
                    </a>
                </div>

                <div>
                    Wallet Status Bar
                </div>


        </div>
        )
    }
}

export default NavBar;
