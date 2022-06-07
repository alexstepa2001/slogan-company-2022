import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navigation_wrapper">
            <Link to = '/'>
                <div className="logo">
                    <img src="img/logo.svg" alt="Логотип" />
                </div>
            </Link>
            <div className="navigation">
                <Link to="/" className="navigation_icon icon_active">
                    <img src="img/icon-home.svg" alt="" />
                </Link>
                <Link to="" className="navigation_icon">
                    <img src="img/icon-globe.svg" alt="" />
                </Link>
                <Link to="/" className="navigation_icon">
                    <img src="img/icon-archive.svg" alt="" />
                </Link>
                <Link to="/" className="navigation_icon">
                    <img src="img/icon-pie-chart.svg" alt="" />
                </Link>
                <Link to="/" className="navigation_icon">
                    <img src="img/icon-dollar-sign.svg" alt="" />
                </Link>
                <Link to="/" className="navigation_icon">
                    <img src="img/icon-database.svg" alt="" />
                </Link>
                <Link to="/" className="navigation_icon">
                    <img src="img/icon-navigation.svg" alt="" />
                </Link>
            </div>
        </nav>
    )
}

export default Navigation;