import React, { Component } from 'react';
import Logo from '../../images/forest.jpeg';


export default class Who extends Component {
    render() {
        return (
            <div>
                <div className="row top-who-box">
                    <div className="col-md-8">  
                        <img src={Logo} alt="Forest Logo" className="forest-logo container-fluid"></img>
                        <span class="words-in-picture">Forward Thinking</span>
                    </div>
                    <div className="col-md-4">  
                        <div className="container scroll-box">
                            <h6 className="news-feed-text">
                            <strong className="top-of-red-box">NEWS FEED</strong>
                            <hr/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="row bottom-who-box">

                    <div className="col-md-8">  
                        <div className="container">
                        <strong>Welcome to our website!</strong>
                        <br></br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>

                    <div className="col-md-4">  
                        <div className="container">
                        <strong>Bigshot, Zoo, & Adds, P.C. </strong>
                        <br></br>
                        419 West South Street, Suite 4200 
                        Houston, Texas 35983 
                        555-555-5555 (Phone) 
                        555-555-5555 (Fax)
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
