import React from 'react';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/styles.min.css';
import { Link } from 'react-router-dom';

export default function RehabAdmin(props) {
    return (
        <body>
            <nav class="navbar navbar-light navbar-expand-md navigation-clean">
                <div class="container"><Link to="/dashboard"><a class="navbar-brand" href="#">Chiron</a></Link><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse"
                        id="navcol-1">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item" role="presentation"></li>
                            <li class="nav-item" role="presentation"><Link to="/contact"><a class="nav-link" href="#">Contact Us</a></Link></li>
                            <li class="nav-item" role="presentation"><Link to="/"><a class="nav-link" href="#">Sign Out</a></Link></li>
                            <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">More</a>
                                <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">First Item</a><a class="dropdown-item" role="presentation" href="#">Second Item</a><a class="dropdown-item" role="presentation" href="#">Third Item</a></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ul class="list-group">
                <li class="list-group-item" style="margin: 12px;">
                    <span>John Doe</span>
                    <span style="margin-left: 30px;color: rgb(218,22,22);">Last Checkup 4 Days Ago</span>
                </li>
                <li class="list-group-item" style="margin: 12px;"><span>Jane Doe</span></li>
                <li class="list-group-item" style="margin: 11px;"><span>Charlie Smith</span></li>
                <li class="list-group-item" style="margin: 11px;"><span>Dylan Dexter</span></li>
                <li class="list-group-item" style="margin: 12px;">
                    <span>Ethan Eskinn</span>
                    <span style="margin-left: 30px;color: rgb(218,22,22);">Last Checkup 2 Days Ago</span>
                </li>
            </ul>
        </body>
    );
}