import React from 'react';
import { NavLink } from 'react-router-dom';


const navbar = () => {
    return (
<div>
<nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div className="container-fluid">
                    <div className="navbar-wrapper">
                        <NavLink className="navbar-brand" >Dashboard</NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
          </button>
                    <div className="collapse navbar-collapse justify-content-end">
                        <form className="navbar-form">
                            <div className="input-group no-border">
                                <input type="text" value="" className="form-control" placeholder="Search..."/>
                                <button type="submit" className="btn btn-white btn-round btn-just-icon">
                  <i className="material-icons">search</i>
                  <div className="ripple-container"></div>
                </button>
                            </div>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" >
                                    <i className="material-icons">dashboard</i>
                                    <p className="d-lg-none d-md-block">
                                        Stats
                                    </p>
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link" to="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="material-icons">notifications</i>
                                    <span className="notification">5</span>
                                    <p className="d-lg-none d-md-block">
                                        Some Actions 
                                    </p>
                                </NavLink>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <NavLink className="dropdown-item" >Mike John responded to your email</NavLink>
                                    <NavLink className="dropdown-item" >You have 5 new tasks</NavLink>
                                    <NavLink className="dropdown-item" >You're now friend with Andrew</NavLink>
                                    <NavLink className="dropdown-item" >Another Notification</NavLink>
                                    <NavLink className="dropdown-item" >Another One</NavLink>
                                </div>

                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="material-icons">person</i>
                                    <p className="d-lg-none d-md-block">
                                        Account
                                    </p>
                                </NavLink>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                                    <NavLink className="dropdown-item" >Profile</NavLink>
                                    <NavLink className="dropdown-item" >Settings</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="dropdown-item" >Log out</NavLink>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
             </div>
    )
}

export default navbar