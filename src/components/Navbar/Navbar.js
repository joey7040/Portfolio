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
                                                        
                                                        <li>
                                                            <Link to="/aboutme" className="nav-link">
                                                                About Me
                                                            </Link>
                                                        </li>
                                                        
                                                        <li>
                                                        <Link to="/resume" className="nav-link">
                                                                Resume
                                                        </Link>
                                                        </li>
                                                        
                                                        <li>
                                                        <Link to="/projects" className="nav-link">
                                                                Projects
                                                        </Link>
                                                        </li>

                                                        <li>
                                                        <Link to="/metrics" className="nav-link">
                                                                Metrics
                                                        </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/contact" className="nav-link">
                                                                Contact
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
        font-size:1.3rem;
        text-transform: capitalize !important;
    }
`


