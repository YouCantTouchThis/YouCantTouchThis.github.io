import React from 'react';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/styles.css';
import './assets/css/TD-BS4-Simple-Contact-Form-1.css';
import './assets/css/TD-BS4-Simple-Contact-Form.css';
import { Link } from 'react-router-dom';
import { calc } from '../services/http';

export default class Calculator extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {output: '?'};
        this.handleClick = this.handleClick.bind(this);
        this.render = this.render.bind(this);
    }

    componentDidMount() {
        this.state = {output: '?'};
    }

    handleClick() {
        // this.setState({
        //     output: `${calc('localhost:8000/users/1/')}`
        // });
        this.setState({
            output: '3 Grams'
        });
    }

    render() {
        return (
            <div>
            <nav className="navbar navbar-dark navbar-expand-lg navigation-clean-search">
                <div className="container"><Link to="/dashboard"><div className="navbar-brand"></div>C H I R O N</Link><Link to="/calculator"><div className="nav-link" href="#">Calculator</div></Link><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div
                        className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="nav-item" role="presentation">
                            <Link to="/contact"><div className="nav-link">Contact</div></Link>
                            </li>
                        </ul><div></div>
                        <form className="form-inline mr-auto" target="_self">
                            <div className="form-group"><label for="search-field"></label></div>
                        </form><span className="navbar-text"></span><Link to='/'><div className="btn btn-light action-button wowo" role="button" href="#">Signout</div></Link></div>
                </div>
            </nav>
            <section className="td-form">
                <div className="row td-form-wrapper">
                    <div className="col td-glass">
                        <form className="td-form-wrapper">
                            <h1 className="text-center">Calculate Dosage</h1>
                            <div className="form-group">
                                <div className="dropdown"><button className="btn btn-primary dropdown-toggle yeyeye" data-toggle="dropdown" aria-expanded="false" type="button">Select a Drug</button>
                                    <div className="dropdown-menu" role="menu"><div className="dropdown-item" role="presentation" >Cocaine</div><a className="dropdown-item" role="presentation" >Heroin</a><a className="dropdown-item" role="presentation" >MDMA(Ecstacy)</a></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><button className="btn btn-dark float-right" type="submit" onClick={()=>this.handleClick()}>Calculate</button></div>
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