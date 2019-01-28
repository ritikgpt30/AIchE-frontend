import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./src/css/navbar.css"


export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            activenav: window.location.pathname.substring(1),
            isHidden: true,
            displaynavbar: false,
            navdisplay: true
        }
        this.setActive = this.setActive.bind(this)
    }
    setActive = (state) => {
        // console.log(this.state.activenav, "asdbh")
        // console.log(state, "asdahvdha")
        this.setState({
            activenav: state
        });
    }
    toggleHidden = () => {
        this.setState({
            isHidden: !this.state.isHidden
        });
    }
    componentDidMount() {
        if (window.innerWidth >= 768) {
            this.setState(
                {
                    navdisplay: false
                }
            )
        }
        // let doc = document.getElementById("navbar")

        // window.addEventListener("scroll", function () {
        //     let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        //     if (scrollTop >= 100) {
        //         doc.classList.add("scroll")
        //     }
        //     else {
        //         doc.classList.remove("scroll")
        //     }

        // }, false)
    }
    render() {
        return (
            <div id="navbar" className="ecell-navbar-parent">
              
                <div className="ecell-navbar-logo">
                <Link to="/"><div className="ecell-navbar-logo-img"></div></Link>
                </div>
                
                <div className="ecell-navbar-ctos">
                    <div className="ecell-navbar-toggle">
                        <div className={!this.state.displaynavbar ? 'new-navbar-i' : 'new-navbar-i span-cross'} onClick={() => this.setState({ displaynavbar: !this.state.displaynavbar })}>
                            <span><i></i></span>
                            <span><i></i></span>
                            <span><i></i></span>
                        </div>
                    </div>
                    {this.state.navdisplay ?
                        <div className={this.state.displaynavbar ? 'ecell-mobile-navbar-active' : 'ecell-mobile-navbar-inactive'}>
                            <Link to="#" className="">
                                <div className={this.state.displaynavbar ? "navbar-show ecell-mobile-menuback" : "navbar-hide ecell-mobile-menuback"}>
                                    MENU
                                </div>
                            </Link>
                            <Link to="/aboutus" className="">
                                <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                                   ABOUT
                                </div>
                            </Link>
                            <Link to="/initiatives" className="">
                                <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                                    BLOGS
                                </div>
                            </Link>
                            <Link to="/getinvolved" className="">
                                <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                                    NEWS    
                                </div>
                            </Link>
                            <Link to="/community" className="">
                                <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                                    EVENTS
                                </div>
                            </Link>
                            <Link to="/resources" className="">
                                <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                                    MEMBERS
                                </div>
                            </Link>
                            <Link to="/contact" className="">
                                <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                                    CONTACT
                                </div>
                            </Link>

                        </div>
                        : null }

                    <div className="ecell-navbar-int-ctos">
                        <ul id="ecell-navbar-options-hide">
                            <li className="ecell-navbar-ctos-dropdown">

                                <Link to="/aboutus" className={this.state.activenav === "aboutus" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("aboutus")}>
                                    ABOUT
                                </Link>
                               
                            </li>
                            <li className="ecell-navbar-ctos-dropdown">
                                <Link to="/initiatives" className={this.state.activenav === "initiatives" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("initiatives")}>
                                    BLOGS
                                </Link>
                              
                            </li>
                            <li className="ecell-navbar-ctos-dropdown">
                                <Link to="/getinvolved" className={this.state.activenav === "getinvolved" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("getinvolved")}>
                                    NEWS 
                                </Link>
                               
                            </li>
                            <li className="ecell-navbar-ctos-dropdown">
                                <Link to="/resources" className={this.state.activenav === "resources" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("resources")}>
                                    EVENTS
                                    </Link>
                              
                            </li>
                            <li className="ecell-navbar-ctos-dropdown">
                                <Link to="/community" className={this.state.activenav === "community" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("community")}>
                                    MEMBERS
                                </Link>
                               
                            </li>
    
                            <li className="ecell-navbar-ctos-dropdown">
                                <Link to="/contact" className={this.state.activenav === "contact" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("contact")}>
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
