import React, { Component } from 'react'
import Subrogation from '../../images/subrogation.jpeg';
import Litigation from '../../images/litigation.jpeg';
import Business from '../../images/business.jpeg';
import Transportation from '../../images/transportation.jpeg';
import Leather_chairs from '../../images/leather_chairs.jpeg';

export default class What extends Component {
    render() {
        return (
            <div>
                <div className="row top-what-box">
                    <div className="col-md-4">  
                        <div className="what-we-do-box">

                            <h6 className="news-feed-text">
                            <strong className="top-of-red-box">WHAT WE DO</strong>
                            <hr/>

                            <ul class="list-bullet-removed">
                                <li>
                                    Subrogation
                                    <ul class="list-bullet-removed">
                                    <li>Property</li>
                                    <li>Workers' Comp</li>
                                    </ul>
                                </li>
                                <li>
                                    Litigation
                                    <ul class="list-bullet-removed">
                                    <li>Appeliate</li>
                                    <li>Commercial</li>
                                    <li>Defense</li>
                                    <li>Labor/Employment</li>
                                    </ul>
                                </li>

                                <li>
                                    Business
                                    <ul class="list-bullet-removed">
                                    <li>Brokerage Agreement</li>
                                    <li>Business Formation</li>
                                    <li>Business Related</li>
                                    <li>Contracts</li>
                                    <li>Propery</li>
                                    <li>Labor/Employment</li>
                                    </ul>
                                </li>

                                <li>
                                    Transportation
                                    <ul class="list-bullet-removed">
                                    <li>Brokerage Agreement</li>
                                    <li>Business Formation</li>
                                    </ul>
                                </li>
                            </ul>

                            <img src={Leather_chairs} alt="Leather Chairs Logo" className="leather_chairs container-fluid"></img>

                            <strong>Attorneys</strong>
                            <br></br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.


                            </h6>

                        </div>
                    </div>

                    <div className="col-md-8">  
                        <div className="container what-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>


                        <div className="row">
                            <div className="col-md-6">
                                <div className="">
                                    <img src={Subrogation} alt="Subrogation Logo" className="subrogation-logo container-fluid"></img>
                                    <div class="words-in-picture-4-pics">Subrogation</div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="">
                                    <img src={Litigation} alt="Litigation Logo" className="litigation-logo container-fluid"></img>
                                    <div class="words-in-picture-4-pics">Litigation</div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="">
                                    <img src={Business} alt="Business Logo" className="business-logo container-fluid"></img>
                                    <div class="words-in-picture-4-pics">Business</div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="">
                                    <img src={Transportation} alt="Transportation Logo" className="transportation-logo container-fluid"></img>
                                    <div class="words-in-picture-4-pics">Transportation</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    

                </div>
            </div>
        )
    }
}
