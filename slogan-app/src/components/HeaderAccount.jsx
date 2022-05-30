import React, { Component } from 'react'

export default class HeaderAccount extends Component {
    render() {
        return (
        <a href = "" className="account">
            <div className="user_photo">
                <img src="img/user.png" alt="User" />
            </div>
            <div className="user_name">
                <h5>Ivan Ivanov</h5>
            </div>
            <div className="log_out">
                <img src="img/icon-log-out.svg" alt="Выйти" />
            </div>
        </a>
        )
    }
}
