import React from 'react';

import { Link } from 'react-router-dom';

function Login(props) {
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

        <div class="container-fluid" style="background-color: #514d4d;">
            <div class="row mh-100vh" style="background-color: #000000;">
                <div class="col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch bg-white p-5 rounded rounded-lg-0 my-5 my-lg-0" id="login-block" style="background-color: rgb(255,255,255);">
                    <div class="m-auto w-lg-75 w-xl-50">
                        <h2 class="text-info font-weight-light mb-5" style="color: rgb(0,0,0);">&nbsp;C H I R ON</h2>
                        <form>
                            <div class="form-group"><label class="text-secondary">Email</label><input class="form-control" type="text" required="" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$" inputmode="email" /></div>
                            <div class="form-group"><label class="text-secondary">Password</label><input class="form-control" type="password" required="" /></div><button class="btn btn-info mt-2" type="submit">Log In</button></form>
                        <p class="mt-3 mb-0"></p>
                    </div>
                </div>
                <div class="col-lg-6 d-flex align-items-end" id="bg-block" style="background-image: url(&quot;https://p0.pikist.com/photos/593/89/hands-reach-people-silhouette-shadow.jpg&quot;);background-size: cover;background-position: center center;">
                    <p class="ml-auto small text-dark mb-2"><br /></p>
                </div>
            </div>
        </div>
        </div>

    );
}