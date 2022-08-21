import React, { Component } from "react";
import WalletStatusBar from "./WalletStatusBar";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Send from "./Send";
import Receive from "./Receive";
import NewWalletPage from "./NewWalletPage";

class NavBar extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav class='nav-bar'>
                    <a class='nav-logo' href='#hero'>
                        <h1>Spectre Wallet</h1>
                    </a>

                    <ul class='nav-items'>
                        <li> 
                            <NavLink to ="/send"> 
                                <p class='nav-item'> Send </p>
                            </NavLink>
                        </li>

                        <li> 
                            <NavLink to ="/receive"> 
                                <p class='nav-item'> Receive </p>
                            </NavLink>
                        </li>

                        <li> 
                            <NavLink to ="/transactions"> 
                                <p class='nav-item'> Transactions </p>
                            </NavLink>
                        </li>
                    </ul>

                    <div>
                        <WalletStatusBar/>
                    </div>
                </nav>

                {/* This is to render the Route after NavBar */}
                <Routes>
                    <Route path="/" element={<NewWalletPage />} />
                    <Route path="/send" element={<Send />} />
                    <Route path="/receive" element={<Receive />} />
                    <Route path="*" element={<div>post not found </div>} />
                </Routes>
            </BrowserRouter>    
        )
    }
}

export default NavBar;
