import React, { Component } from 'react'
import Chicago from '../../images/chicago.jpeg';

export default class Where extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">  
                        <div className="where-box">

                            <h6 className="news-feed-text">
                                <strong className="top-of-red-box">WHERE WE WORK</strong>
                                <hr/>

                                United States
                                <br></br>
                                <br></br>

                                International
                                <br></br>
                                <br></br>

                                <img src={Chicago} alt="Chicago Logo" className="chicago container-fluid"></img>
                                <br></br>

                                <strong>Career Opportunities</strong>
                                <br></br>
                                Join our magnificent firm.
                            </h6>
                        </div>
                    </div>

                    <div className="col-md-8">  
                        <div className="row">
                            <div className="container where-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-8 table_stuff-usa">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">United States</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>State</td>
                                            <td>State</td>
                                            <td>State</td>
                                        </tr>
                                        <tr>
                                            <td>State</td>
                                            <td>State</td>
                                            <td>State</td>
                                        </tr>
                                        <tr>
                                            <td>State</td>
                                            <td>State</td>
                                            <td>State</td>
                                        </tr>
                                        <tr>
                                            <td>State</td>
                                            <td>State</td>
                                            <td>State</td>
                                        </tr>
                                        <tr>
                                            <td>State</td>
                                            <td>State</td>
                                            <td>State</td>
                                        </tr>
                                        <tr>
                                            <td>State</td>
                                            <td>State</td>
                                            <td>State</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            
                            <div className="col-sm-4 table_stuff-international">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">International</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Canada</td>
                                        </tr>
                                        <tr>
                                            <td>Colombia</td>
                                        </tr>
                                        <tr>
                                            <td>Germany</td>
                                        </tr>
                                        <tr>
                                            <td>Nicaragua</td>
                                        </tr>
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
