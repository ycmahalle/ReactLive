import React from "react";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
        <div className="container-fluid shadow bg-white nav_bg navu" style={{position:"sticky",top:"0",zIndex: '111'}}>
            <div className="row">
            <div className="col-10 mx-auto">  
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand d-flex justify-content-lg-center " href="#"> 
                            <img src="square.png" width="50px" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="menu">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                                <li className="nav-item"> 
                                <NavLink exact activeClassName="tab-active" className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="tab-active" className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="tab-active" className="nav-link" to="/services">Services</NavLink>
                                </li> 
                                <li className="nav-item">
                                    <NavLink exact activeClassName="tab-active" className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            
            </div>
            </div>
        </div>
        </>
    )
}

 

export default Navbar;