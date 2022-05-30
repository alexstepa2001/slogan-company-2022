import React, { Component } from 'react'
import Search from './Search';
import Notifications from './Notifications';
import HeaderAccount from './HeaderAccount';

export default class Header extends Component {
    render() {
        return (
        <header className="header">
            <Search/>
            <Notifications/>
            <HeaderAccount/>
        </header>
        )
    }
}
