import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../image/logo.png'

const sidebar = () => {
    return (
        
          <div className="wrapper ">
        <div className="sidebar" data-color="green" data-background-color="white" data-image="../NavLinkssets/img/sidebar-1.jpg">
           
            <div className="logo">
                <NavLink to="#" className="simple-text logo-normal">
                    <img src={logo} alt=""/>
                </NavLink>
            </div>
            <div className="sidebar-wrapper">
                <ul className="nav">
                    <li className="nav-item active  ">
                        <NavLink className="nav-link" to="dashboard.html">
                            <i className="material-icons">dashboard</i>
                            <p>Dashboard</p>
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" to="office-position.html">
                            <i className="material-icons">person</i>
                            <p>Office Position</p>
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" to="candidates.html">
                            <i className="material-icons">content_paste</i>
                            <p>Candidates</p>
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" to="election.html">
                            <i className="material-icons">library_books</i>
                            <p>Election Setup</p>
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" to="voters.html">
                            <i className="material-icons">bubble_chart</i>
                            <p>Voters' List</p>
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" to="">
                            <i className="material-icons">location_ons</i>
                            <p>Log out</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>  
        </div>
    )
}

export default sidebar
