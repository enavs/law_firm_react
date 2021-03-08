import React, { Component } from 'react'
import Map from '../../images/chicago.jpeg';
import Telephone from '../../images/telephone.jpeg';
import Glasses from '../../images/glasses.jpeg';
import Chess from '../../images/chess.jpeg';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">  
                        <div className="contact-box">


                            <h6 className="news-feed-text">
                                <strong className="top-of-red-box">CONTACT US</strong>
                                <hr/>
                                    Directions/Parking
                                    <br></br>
                                    <br></br>

                                    Career Opportunities
                                    <br></br>
                                    <br></br>

                                    <img src={Glasses} alt="Glasses Logo" className="glasses container-fluid"></img>
                                    <br></br>

                                    <strong>News & Events</strong>
                                    <br></br>
                                    Join our magnificent firm and do more stuff with us.
                            </h6>
                        </div>
                    </div>

                    <div className="col-md-6">  
                        <div className="row">
                            <div className="container">
                                <img src={Telephone} alt="Telephone Logo" className="telephone container-fluid"></img>
                                <div className="words-in-telephone-pic">Contact</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="container">
                                The office housr are 8am - 5pm Monday through Friday
                                <br></br>
                                <br></br>
                                689 East South Street
                                <br></br>
                                Suite 4210
                                <br></br>
                                Houston, Texas 09324
                                <br></br>
                                <br></br>
                                PH: 555-555-5555
                                <br></br>
                                <br></br>
                                FAX: 555-555-5555
                                <br></br>
                                <br></br>
                                {/* Contact Rosemary Sage at rosemary@lawfirm.com */}

                                Contact Rosemary Sage at <Link className="email-link" to="/contact">rosemary@lawfirm.com</Link>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-3">  
                        <div className="contact-location-box">

                        <img src={Map} alt="Map Logo" className="map container-fluid"></img>

                        <strong className="bold-red-text">Where We Work</strong>
                        <br></br>

                        <h6 className="bold-red-text">Find out more about our work coverage area</h6>
                        <br></br>
                        <br></br>

                        <img src={Chess} alt="Chess Logo" className="chess container-fluid"></img>
                        <br></br>

                        <strong className="">News & Events</strong>
                        <br></br>
                        Join our magnificent firm and do more stuff with us.

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
