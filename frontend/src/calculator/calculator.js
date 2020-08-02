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
            output: calc('localhost:8000/user/1')
        }));
    }

    render() {
        return (
            <p>{this.state.output}</p>
        )
    }
}