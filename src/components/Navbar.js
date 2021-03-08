import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/law_firm_logo.jpeg';


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <button className="offset-11 login-button">Login</button>
                <br></br>
                <br></br>

                <div className="container">
                    <img src={Logo} alt="Company Logo" className="navbar-company-logo"></img>
                    {/* <div className="words-in-logo-pic">Law4U</div> */}
                </div>

                <nav className="nav nav-justified navy-bary">
                    <Link className="nav-item nav-link breadcrumb-item" to="/who">Who we are</Link>
                    <Link className="nav-item nav-link breadcrumb-item" to="/what">What we do</Link>
                    <Link className="nav-item nav-link breadcrumb-item" to="/news">News & Events</Link>
                    <Link className="nav-item nav-link breadcrumb-item" to="/where">Where we work</Link>
                    <Link className="nav-item nav-link breadcrumb-item " to="/contact">Contact us</Link>
                </nav>

                    {/* <nav className="nav nav-justified navy-footy stuff-header">
                        <Link className="nav-item nav-link " to="/who"><span className="stuff-header-span">Who we are</span></Link>
                        <Link className="nav-item nav-link " to="/what"><span className="stuff-header-span">What we do</span></Link>
                        <Link className="nav-item nav-link " to="/news"><span className="stuff-header-span">News & Events</span></Link>
                        <Link className="nav-item nav-link " to="/where"><span className="stuff-header-span">Where we work</span></Link>
                        <Link className="nav-item nav-link  " to="/contact"><span className="stuff-header-span">Contact us</span></Link>
                    </nav> */}
            </div>
        )
    }
}
