import React from 'react';
import './assets/font-awesome.min.css';
import './assets/Header-Dark.css';
import './Navbar.css';
import './assets/Navigation-with-Button.css';
import './assets/fonts/fontawesome-webfont.eot';
import './assets/bootstrap.min.css';
import './assets/styles.css';
import './assets/Features-Clean copy.css';
import './assets/fonts/FontAwesome.otf';
import { Link } from 'react-router-dom';

export default function Landing(props) {

    return (

    <body>
        <div>
            <div className="header-dark">
                <nav className="navbar navbar-dark navbar-expand-lg navigation-clean-search">
                    <div className="container"><div className="navbar-brand">C H I R O N</div><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse"
                            id="navcol-1">
                            <ul className="nav navbar-nav">
                                <li className="nav-item" role="presentation"></li>
                            </ul><Link to="/calculator"><button>Calculator</button></Link><Link to="/contact"><div className="nav-link">Contact</div></Link>
                            <form className="form-inline mr-auto" target="_self">
                                <div className="form-group"><label for="search-field"></label></div>
                            </form><span className="navbar-text"><Link to="/login"></Link><div className="login">Log In</div></span><div className="btn btn-light action-button" role="button" >Sign Up</div></div>
                    </div>
                </nav>
                <div className="container hero">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h1 className="text-center amaing">Using The Power of AI and Telemedicine to Redefine Rehab</h1>
                        </div>
                    </div>
                </div>
                <h1 className="amaing">Get Sober: From Home</h1>
            </div>
        </div>
        <div className="features-clean">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center">Features of The App</h2>
                    <p className="text-center"></p>
                </div>
                <div className="row features">
                    <div className="col-sm-6 col-lg-4 item"><i className="fa fa-calculator icon"></i>
                        <h3 className="name">AI Calculator</h3>
                        <p className="description">With many different factors such as body weight, age, resistance and more, calculating the proper dose can be a challenge. Our smart calculator makes rehab easier and safer.</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 item"><i className="fa fa-heartbeat icon"></i>
                        <h3 className="name">Heart Rate Analysis</h3>
                        <p className="description">Tracking drug use at home can be a challenge, especially with the novel coronavirus. Our heart rate tracking makes sure that rehab professionals can accurately track drug usage from the comfort of home.</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 item"><i className="fa fa-eye icon"></i>
                        <h3 className="name">Ocular Analysis</h3>
                        <p className="description">Although Heart Rate is an accurate way of measuring drug measurement, Ocular Analysis uses advanced and minimally invasive AI to detect whether users are intoxicated or not.</p>
                    </div>
                </div>
            </div>
        </div>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        </body>

    )
    
}

