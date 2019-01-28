import React, { Component } from 'react';
import './src/css/blogs.css'
export default class BlogsIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
            <div className="landing-blogs-parent">
                <div className="landing-blogs-parent-heading">
                    <div className="landing-blogs-parent-heading-line">
                    </div>
                    <div className="landing-blogs-parent-heading-content">
                        blogs
                    </div>

                </div>

                <div className="landing-blogs-content-parent">
                    <div className="landing-blogs-content-child">
                    </div>
                    <div className="landing-blogs-content-child">
                    </div>
                    <div className="landing-blogs-content-child">
                    </div>
                
                    
                </div>
            </div>


        </div>

        )
    }
}
