import React, { Component } from "react";
import WalletStatusBar from "./WalletStatusBar";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Send from "./Send";
import Receive from "./Receive";
import NewWalletPage from "./NewWalletPage";
import Transactions from "./Transactions";

class NavBar extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav class='nav-bar'>
                    <a class='nav-logo' href='#hero'>
                        <h1>Spectre Wallet</h1>
                    </a>

                    <div class='nav-items'>
                        <div> 
                            <NavLink to ="/send"> 
                                <p class='nav-item'> Send </p>
                            </NavLink>
                        </div>

                        <div> 
                            <NavLink to ="/receive"> 
                                <p class='nav-item'> Receive </p>
                            </NavLink>
                        </div>

                        <div> 
                            <NavLink to ="/transactions"> 
                                <p class='nav-item'> Transactions </p>
                            </NavLink>
                        </div>
                    </div>

                    <div>
                        <WalletStatusBar/>
                    </div>
                </nav>

                {/* This is to render the Route after NavBar */}
                <Routes>
                    <Route path="/new" element={<NewWalletPage />} />
                    <Route path="/send" element={<Send />} />
                    <Route path="/receive" element={<Receive />} />
                    <Route path="/transactions" element={<Transactions/>} />
                </Routes>
            </BrowserRouter>    
        )
    }
}

export default NavBar;
