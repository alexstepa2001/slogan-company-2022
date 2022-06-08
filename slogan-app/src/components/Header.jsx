import Search from './Search';
import Notifications from './Notifications';
import HeaderAccount from './HeaderAccount';
import Burger from './Burger';

const Header = () => {

    return (
    <>
        <header className="header">
            <Burger/> 
            <Search/>
            <Notifications/>
            <HeaderAccount/>
        </header>
        <div className="empty"></div>
    </>
    )
}

export default Header;
