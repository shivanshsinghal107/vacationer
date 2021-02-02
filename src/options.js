import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

export default class Options extends Component{
    constructor(props){
        super(props);

        this.renderPage1 = this.renderPage1.bind(this);
        this.renderPage2 = this.renderPage2.bind(this);
    }

    renderPage1() {
        return (
            <Page1 />
        );
    }

    renderPage2() {
        return (
            <Page2 />
        );
    }

    render() {
        return (
            <div class="container foot">
            
                <h3> How to reach? </h3>
                <Link className="btn btn-large btn-primary" to={"/Page1"}>Flights</Link>
                <br /><br />
                <Link className="btn btn-large btn-primary" to={"/Page2"}>Trains</Link>
            
        </div>
        
        );
    }
}