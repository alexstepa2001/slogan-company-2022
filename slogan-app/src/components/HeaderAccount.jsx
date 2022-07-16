import {Link} from 'react-router-dom';

const HeaderAccount = () => {
    const logOutHandler = () => {
        sessionStorage.clear();
        window.location.replace("/");
    }
    return (
    <Link to = "/" className="account">
        <div className="user_photo">
            <img src="img/user.png" alt="User" />
        </div>
        <div className="user_name">
            <h5>{sessionStorage.getItem('name')}</h5>
        </div>
        <div className="log_out" onClick = {logOutHandler}>
            <img src="img/icon-log-out.svg" alt="Выйти" />
        </div>
    </Link>
    )
}

export default HeaderAccount;