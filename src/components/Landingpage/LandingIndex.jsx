import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import './src/css/landingpage.css';
import About from './About';
import News from './News';

import Blogs from './Blogs';
import Footer from './Footer';

export default class AboutusIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <section id="landing-page-navbar"> <Navbar /></section>
                <section ><div><About /></div></section>
                <section><div><News /></div></section>
                <section><div><Blogs /></div></section>
                <section><div><Footer /></div></section>



            </div>

        )
    }
}
