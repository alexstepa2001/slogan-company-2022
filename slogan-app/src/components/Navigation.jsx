import React, { Component } from 'react'

class Navigation extends Component {
    render() {
        return (
            <nav className="navigation_wrapper">
                <div className="logo">
                    <img src="img/logo.svg" alt="Логотип" />
                </div>
                <div className="navigation">
                    <a href="" className="navigation_icon icon_active">
                        <img src="img/icon-home.svg" alt="" />
                    </a>
                    <a href="" className="navigation_icon">
                        <img src="img/icon-globe.svg" alt="" />
                    </a>
                    <a href="" className="navigation_icon">
                        <img src="img/icon-archive.svg" alt="" />
                    </a>
                    <a href="" className="navigation_icon">
                        <img src="img/icon-pie-chart.svg" alt="" />
                    </a>
                    <a href="" className="navigation_icon">
                        <img src="img/icon-dollar-sign.svg" alt="" />
                    </a>
                    <a href="" className="navigation_icon">
                        <img src="img/icon-database.svg" alt="" />
                    </a>
                    <a href="" className="navigation_icon">
                        <img src="img/icon-navigation.svg" alt="" />
                    </a>
                </div>
            </nav>
        )
    }
}

export default Navigation;