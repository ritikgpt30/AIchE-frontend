import React, { Component } from 'react';
import FetchApi from "../../utils/FetchApi"

export default class AboutusIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleClick=()=>{
        FetchApi('get',"/api/alumni",null)
        .then(r=>{
            console.log(r.data)
        }).catch(response=>{
            console.log(response)
        })
    }
    render() {
        return (
            <div>
               hello I am prakhar
            <button onClick={this.handleClick}>Click</button>
            </div>

        )
    }
}
