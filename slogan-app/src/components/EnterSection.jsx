import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class EnterSection extends Component {
    render() {
        return (
            <section className="enter_section">
                <div className="img_enter">
                    <img src="img/cod_home_section2-1536x1491.png" alt="" />
                </div>
                <div className="login">
                    <div className="login_logo">
                        <img src="img/logo-main.svg" alt="" />
                    </div>
                    <form action="">
                        <p>E-mail</p>
                        <input type="email" placeholder = "Type your e-mail" name="" id="email" />
                        <p>Password</p>
                        <input type="password" placeholder = "Type your password" name="" id="password" />
                        <div className="check_box">
                            <input type="checkbox" className = "check_input" name="" id="check_box" />
                            Keep me logged in
                        </div>
                        <input type="submit" value="Login" />
                    </form>
                    <p>Not a member? <Link to="/">Request registration</Link></p>
                </div>
            </section>
        )
    }
}
