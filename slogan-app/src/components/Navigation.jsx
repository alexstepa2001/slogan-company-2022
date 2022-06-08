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
                    <div className="nav_name">Home</div>
                </Link>
                <Link to="" className="navigation_icon">
                    <img src="img/icon-globe.svg" alt="" />
                    <div className="nav_name">Services</div>
                </Link>
                <Link to="/" className="navigation_icon">
                    <img src="img/icon-archive.svg" alt="" />
                    <div className="nav_name">Storage</div>
                </Link>
                <Link to="/" className="navigation_icon">
                    <img src="img/icon-pie-chart.svg" alt="" />
                    <div className="nav_name">Charts</div>
                </Link>
                <Link to="/" className="navigation_icon">
                    <img src="img/icon-dollar-sign.svg" alt="" />
                    <div className="nav_name">Currency</div>
                </Link>
                <Link to="/" className="navigation_icon">
                    <img src="img/icon-database.svg" alt="" />
                    <div className="nav_name">Base</div>
                </Link>
                <Link to="/" className="navigation_icon">
                    <img src="img/icon-navigation.svg" alt="" />
                    <div className="nav_name">Locations</div>
                </Link>
            </div>
        </nav>
    )
}

export default Navigation;