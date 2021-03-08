import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navfooter extends Component {
    render() {
        return (  
            <div className="navy-footy-top-borderline">
                <div className="col-md-10 offset-1">
                    {/* <nav className="nav nav-justified navy-footy">
                        <Link className="nav-item nav-link breadcrumb-item" to="/who">Who we are</Link>
                        <Link className="nav-item nav-link breadcrumb-item" to="/what">What we do</Link>
                        <Link className="nav-item nav-link breadcrumb-item" to="/news">News & Events</Link>
                        <Link className="nav-item nav-link breadcrumb-item" to="/where">Where we work</Link>
                        <Link className="nav-item nav-link breadcrumb-item" to="/contact">Contact us</Link>
                    </nav> */}

                    <nav className="nav nav-justified navy-footy stuff-footer">
                        <Link className="nav-item nav-link " to="/who"><span className="stuff-footer-span">Who we are</span></Link>
                        <Link className="nav-item nav-link " to="/what"><span className="stuff-footer-span">What we do</span></Link>
                        <Link className="nav-item nav-link " to="/news"><span className="stuff-footer-span">News & Events</span></Link>
                        <Link className="nav-item nav-link " to="/where"><span className="stuff-footer-span">Where we work</span></Link>
                        <Link className="nav-item nav-link  " to="/contact"><span className="stuff-footer-span">Contact us</span></Link>
                    </nav>
                </div>
            </div>
        )
    }
}
