import Search from './Search';
import Notifications from './Notifications';
import HeaderAccount from './HeaderAccount';

const Header = () => {
    return (
    <header className="header">
        <Search/>
        <Notifications/>
        <HeaderAccount/>
    </header>
    )
}

export default Header;
