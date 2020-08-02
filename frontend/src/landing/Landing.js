import React from 'react';
import './Navbar.css';
import './assets/Features-Clean.css';
import './assets/bootstrap.min.css';
import './assets/font-awesome.min.css';
import './assets/Header-Dark.css';
import './assets/Navigation-with-Button.css';
import './assets/styles.css';
import { Link } from 'react-router-dom';

function Landing(props) {

    return (
        
    <body>
        <div>
            <div class="header-dark">
                <nav class="navbar navbar-dark navbar-expand-lg navigation-clean-search">
                    <div class="container"><a class="navbar-brand" href="#">C H I R O N</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse"
                            id="navcol-1">
                            <ul class="nav navbar-nav">
                                <li class="nav-item" role="presentation"></li>
                            </ul><a href="#">Calculator</a><a class="nav-link" href="#">Contact</a>
                            <form class="form-inline mr-auto" target="_self">
                                <div class="form-group"><label for="search-field"></label></div>
                            </form><span class="navbar-text"><a class="login" href="#">Log In</a></span><a class="btn btn-light action-button" role="button" href="#">Sign Up</a></div>
                    </div>
                </nav>
                <div class="container hero">
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <h1 class="text-center amaing">Using The Power of AI and Telemedicine to Redefine Rehab</h1>
                        </div>
                    </div>
                </div>
                <h1 class="amaing">Get Sober: From Home</h1>
            </div>
        </div>
        <div class="features-clean">
            <div class="container">
                <div class="intro">
                    <h2 class="text-center">Features of The App</h2>
                    <p class="text-center"></p>
                </div>
                <div class="row features">
                    <div class="col-sm-6 col-lg-4 item"><i class="fa fa-calculator icon"></i>
                        <h3 class="name">AI Calculator</h3>
                        <p class="description">With many different factors such as body weight, age, resistance and more, calculating the proper dose can be a challenge. Our smart calculator makes rehab easier and safer.</p>
                    </div>
                    <div class="col-sm-6 col-lg-4 item"><i class="fa fa-heartbeat icon"></i>
                        <h3 class="name">Heart Rate Analysis</h3>
                        <p class="description">Tracking drug use at home can be a challenge, especially with the novel coronavirus. Our heart rate tracking makes sure that rehab professionals can accurately track drug usage from the comfort of home.</p>
                    </div>
                    <div class="col-sm-6 col-lg-4 item"><i class="fa fa-eye icon"></i>
                        <h3 class="name">Ocular Analysis</h3>
                        <p class="description">Although Heart Rate is an accurate way of measuring drug measurement, Ocular Analysis uses advanced and minimally invasive AI to detect whether users are intoxicated or not.</p>
                    </div>
                </div>
            </div>
        </div>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        </body>

    )
    
}

