import React from 'react';

import { Link } from 'react-router-dom';

function Contact() {
    return (
    <div>
    <nav class="navbar navbar-dark navbar-expand-lg navigation-clean-search">
        <div class="container"><a class="navbar-brand" href="#">C H I R O N</a><a class="nav-link" href="#">Calculator</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-4"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div
                class="collapse navbar-collapse" id="navcol-4">
                <ul class="nav navbar-nav">
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Contact</a></li>
                </ul><a href="#"></a>
                <form class="form-inline mr-auto" target="_self">
                    <div class="form-group"><label for="search-field"></label></div>
                </form><span class="navbar-text"></span><a class="btn btn-light action-button wowo" role="button" href="#">Signout</a></div>
        </div>
    </nav>
    <div class="team-grid">
        <div class="container">
            <div class="intro">
                <h2 class="text-center" style="color: rgb(48,162,184);">Our Team</h2>
                <p class="text-center">Using AI to fight drug abuse from home</p>
            </div>
            <div class="row people">
                <div class="col-md-4 col-lg-3 item">
                    <div class="box" style="background-image: url('assets/img/47196768_1586633688533212_r.jpg');">
                        <div class="cover">
                            <h3 class="name">Gaurish Lakhanpal</h3>
                            <p class="title">Web Developer</p>
                            <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-3 item">
                    <div class="box" style="background-image: url('assets/img/117035911_2334533300186857_8597192872971095379_n.png');">
                        <div class="cover">
                            <h3 class="name">Aditya Tiwari</h3>
                            <p class="title">Web developer</p>
                            <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-3 item">
                    <div class="box" style="background-image:url(assets/img/3.jpg)">
                        <div class="cover">
                            <h3 class="name">Pahel Srivastava</h3>
                            <p class="title">Opencv specialist</p>
                            <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-3 item">
                    <div class="box" style="background-image:url(assets/img/4.jpg)">
                        <div class="cover">
                            <h3 class="name">Anish Karthik</h3>
                            <p class="title">ai specialist</p>
                            <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" id="info-container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-center text-info" style="color: rgb(255,255,255);">Contact Us</h2>
                </div>
                <div class="col-12 col-sm-6 col-md-6" id="contact-box">
                    <p id="contact-text">We believe that everyone should be able to get the support and help they need. Use the contact form to reach out to us for help and support.</p>
                    <div class="info-box"><i class="fa fa-map-marker my-info-icons"></i><span class="text-uppercase text-info" style="color: rgb(255,255,255);">Address: </span><span>America</span></div>
                    <div class="info-box"><i class="fa fa-envelope my-info-icons"></i><span class="text-uppercase text-info">Email: </span><span>chiron.proccess@gmail.com</span></div>
                    <div class="info-box"><i class="fa fa-phone-square my-info-icons"></i><span class="text-uppercase text-info">Phone: </span><span>123-456-7891</span></div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 site-form">
                    <form id="my-form">
                        <div class="form-group"><label class="sr-only" for="firstname">First Name</label><input class="form-control" type="text" id="firstname" name="firstname" placeholder="First Name" autofocus=""/></div>
                        <div class="form-group"><label class="sr-only" for="lastname">Last Name</label><input class="form-control" type="text" id="lastname" name="lastname" placeholder="Last Name"/></div>
                        <div class="form-group"><label class="sr-only" for="phonenumber">Phone Number</label><input class="form-control" type="tel" id="phonenumber" name="phonenumber" required="" placeholder="Phone"/></div>
                        <div class="form-group"><label class="sr-only" for="email">Email Address</label><input class="form-control" type="text" id="email" name="email" required="" placeholder="Email"/></div>
                        <div class="form-group"><label class="sr-only" for="messages">Last Name</label><textarea class="form-control" name="messages" required="" placeholder="Message" rows="8"></textarea></div><button class="btn btn-light btn-lg" id="form-btn" type="submit">SEND </button></form>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    </div>
    );
}