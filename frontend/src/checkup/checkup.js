import React from 'react';
import { Link } from 'react-router-dom';

function Checkup() {
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
    <h1>Dashboard</h1>
    <div id="wrapper">
        <div class="container">
            <h1 class="amazing">Time Till Next Dose</h1>
            <div id="clockdiv">
                <div class="clock-wrapper"><span class="days"> </span>
                    <div class="smalltext">
                        <p>Days </p>
                    </div>
                </div>
                <div class="clock-wrapper"><span class="hours"> </span>
                    <div class="smalltext">
                        <p>Hours </p>
                    </div>
                </div>
                <div class="clock-wrapper"><span class="minutes"> </span>
                    <div class="smalltext">
                        <p>Minutes </p>
                    </div>
                </div>
                <div class="clock-wrapper"><span class="seconds"> </span>
                    <div class="smalltext">
                        <p>Seconds </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="wrapper" class="wowo">
        <div class="container">
            <h1 class="amazing">Checkup Done Today</h1>
            <h1>Yes</h1>
            <div id="clockdiv"></div>
        </div>
    </div>
    <div class="amaing">
        <h1>Offences:</h1>
        <h1>5</h1>
    </div><button class="btn btn-primary wowow" type="button">Report an Offence</button><button class="btn btn-primary amazingfgdf" type="button">Conduct a Checkup</button>
    <div>
        <p><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
    </div>
    </div>

    );
}