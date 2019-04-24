import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import {ButtonContainer} from './Button';
import './Navbar.css';
import logo from '../assets/img/AveryLogo.png';


export default class Navbar extends Component {
    render(){
        return(
            <div>
                <NavWraper className="navbar navbar-expand-lg navbar-light bg-light ">
                            
                            
                            <Link className="nav-item" to="/">
                            <img className="logo" src={logo} alt="logo" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav align-items-center ml-auto">
                                                        <li className="nav-item">
                                                            <Link to="/products" className="nav-link">
                                                                products
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/mission" className="nav-link">
                                                                mission
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/about" className="nav-link">
                                                                about
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/donate" className="nav-link">
                                                                donate
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/gallery" className="nav-link">
                                                                gallery
                                                            </Link>
                                                        </li>
                                                        

                                                        <li>
                                                        <Link to="/products" className="ml-auto">
                                                                <ButtonContainer >
                                                                <span className="mr-2 ml-1">
                                                                <i className="fas fa-cart-plus"></i>
                                                                </span>
                                                                </ButtonContainer>
                                                        </Link>
                                                        </li>
                                                    </ul> 
                                                </div>

                                              
                </NavWraper>
            </div>
        )
    }
}


const NavWraper = styled.nav`
    background:var(--mainBlue);
    .nav-link{
        color:var(--mainDark) !important;
        font-size:1.3rem;
        text-transform: capitalize !important;
    }
`


