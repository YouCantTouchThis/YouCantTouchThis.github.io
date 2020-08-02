import React from 'react';
import './Navbar.css';

function Navbar(props) {
    if (props.loggedin) {
        return (
            <p>This is the Navbar</p>
        );
    } else {
        return (
            <p>This is the navbar, but you haven't logged in</p>
        );
    }
}