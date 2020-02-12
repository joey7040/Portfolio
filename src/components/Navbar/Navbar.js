import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from '../../assets/img/JRlogo.png';
import './Navbar.css';


export default class Navbar extends Component {
    render(){
        return(
            <div className= 'justify-content-center'>
                <NavWraper className="navbar navbar-expand-lg navbar-light bg-light nav-masthead justify-content-center ">
                            
                            
                            <Link className="nav-item" to="/">
                            <img className="logo" src={logo} alt="logo" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav align-items-center ml-auto">
                                                        
                                                 
                                                        
                                                        <li className="nav-item dropdown">
                                                            <Link to="/aboutme" className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                explore
                                                            </Link>
                                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                            <Link to="/resume" className=" dropdown-item">
                                                                Resume
                                                            </Link>
                                                            <Link to="/projects" className="dropdown-item">
                                                                Projects
                                                            </Link>
                                                            <Link to="/metrics" className="dropdown-item">
                                                                Metrics
                                                            </Link>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <Link to="/aboutme" className="nav-link">
                                                                    about me
                                                            </Link>
                                                        </li>

                                                        <li>
                                                            <Link to="/contact" className="nav-link">
                                                                    contact
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


