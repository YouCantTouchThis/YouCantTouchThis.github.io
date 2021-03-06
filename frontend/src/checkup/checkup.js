import React from 'react';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/Drag-and-Drop-Multiple-File-Form-Input-upload-Advanced.css';
import './assets/css/TD-BS4-Simple-Contact-Form-1.css';
import './assets/css/TD-BS4-Simple-Contact-Form.css';
import './assets/fonts/font-awesome.min.css';
import { Link } from 'react-router-dom';
import ScriptTag from 'react-script-tag';

export default class Checkup extends React.Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-dark navbar-expand-lg navigation-clean-search">
                <div class="container"><Link to="/dashboard"><a class="navbar-brand" href="#">C H I R O N</a></Link><Link to="/calculator"><a class="nav-link" href="#">Calculator</a></Link><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div
                        class="collapse navbar-collapse" id="navcol-1">
                        <ul class="nav navbar-nav">
                            <li class="nav-item" role="presentation"><Link to = "/contact"><a class="nav-link" href="#">Contact</a></Link></li>
                        </ul><a></a>
                        <form class="form-inline mr-auto" target="_self">
                            <div class="form-group"><label for="search-field"></label></div>
                        </form><span class="navbar-text"></span><Link to = "/"><a class="btn btn-light action-button wowo" role="button" href="#">Signout</a></Link></div>
                </div>
            </nav>
            <section class="td-form"></section>
            <div class="m-5">
                <div id="backdrop" class="backdrop backdrop-transition backdrop-dark">
                    <div class="text-center w-100" style="position: absolute;top: 50%;">
                        <div class="bg-light border rounded border-success shadow-lg m-auto" style="width: 150px;height: 150px;"><i class="fa fa-upload d-block p-4" style="font-size: 50px;"></i><span>Drop file to attach</span></div>
                    </div>
                </div>
                <div class="jumbotron pt-1">
                    <div class="alert alert-success invisible mt-5" role="alert"><span id="notify"></span></div>
                    <h1>Submit an Image</h1>
                    <p><label for="form-files"><a class="btn btn-secondary btn-sm" role="button">Choose Files</a></label>&nbsp;or drag the files to anywhere on this page.<br/></p>
                    <p id="filecount"><br/></p><input type="number" placeholder="Enter your heartrate" />
                    <div id="list"></div>
                    <form method="post"><input type="file" id="form-files" class="invisible" name="files" multiple="" /><button class="btn btn-outline-primary btn-block" type="submit">Submit</button><button class="btn btn-danger mt-5" type="reset" onclick="clearFiles()">Reset</button></form>
                </div>
                <div class="text-center bg-light border rounded border-dark shadow-lg p-3"><img id="image_preview" width="100" />
                    <div>
                    <button class="btn btn-warning btn-sm m-3" onclick="previewClose()">Close</button>
                    </div>
                </div>
            </div>
            <ScriptTag isHydrating={true} type="text/javascript" src="assets/bootstrap/js/bootstrap.min.js" />
            <ScriptTag isHydrating={true} type="text/javascript" src="assets/js/jquery.min.js" />
            <ScriptTag isHydrating={true} type="text/javascript" src="assets/js/Drag-and-Drop-Multiple-File-Form-Input-upload-Advanced.js" />
            </div>
        );
    }
}