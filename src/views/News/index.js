import React, { Component } from 'react'
import NewsFoto from '../../images/news.jpeg';

export default class News extends Component {
    render() {
        return (
            <div>
                <img src={NewsFoto} alt="News Logo" className="news container-fluid"></img>
            </div>
        )
    }
}
