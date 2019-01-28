import React, { Component } from 'react';
import './src/css/news.css'
import { Carousel } from 'antd';
export default class NewsIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="landing-news-parent">
                    <div className="landing-news-parent-heading">
                        <div className="landing-news-parent-heading-line">
                        </div>
                        <div className="landing-news-parent-heading-content">
                            NEWS
                        </div>

                    </div>

                    <div className="landing-news-slider-parent">
                        <div className="landing-news-slider-parent-pic">
                        </div>
                        <div className="landing-news-slider-child">
                        <Carousel effect="fade" className="news-slider">
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>,
                        </div>
                        
                    </div>
                </div>


            </div>

        )
    }
}
