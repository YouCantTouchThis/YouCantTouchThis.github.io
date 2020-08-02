import React from 'react';

import { Link } from 'react-router-dom';
import calc from '../services/http';

class Calculator extends React.Component {
    contructor() {
        this.state = {output: '?'};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            output: `${calc('localhost:8000/user/1')}`
        }));
    }

    render() {
        return (
    <div>
    <nav class="navbar navbar-dark navbar-expand-lg navigation-clean-search">
        <div class="container"><a class="navbar-brand" href="#">C H I R O N</a><a class="nav-link" href="#">Calculator</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div
                class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav">
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Contact</a></li>
                </ul><a href="#"></a>
                <form class="form-inline mr-auto" target="_self">
                    <div class="form-group"><label for="search-field"></label></div>
                </form><span class="navbar-text"></span><a class="btn btn-light action-button wowo" role="button" href="#">Signout</a></div>
        </div>
    </nav>
    <section class="td-form">
        <div class="row td-form-wrapper">
            <div class="col td-glass">
                <form class="td-form-wrapper">
                    <h1 class="text-center">Calculate Dosage</h1>
                    <div class="form-group">
                        <div class="dropdown"><button class="btn btn-primary dropdown-toggle yeyeye" data-toggle="dropdown" aria-expanded="false" type="button">Select a Drug</button>
                            <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">Cocaine</a><a class="dropdown-item" role="presentation" href="#">Heroin</a><a class="dropdown-item" role="presentation" href="#">MDMA(Ecstacy)</a></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-12"><button class="btn btn-dark float-right" type="submit">Calculate</button></div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <p>{this.state.output}</p>
    </div>   
        )
    }
}