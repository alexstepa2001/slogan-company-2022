import {Link} from 'react-router-dom';
import React, {useState } from 'react';

const EnterSection = () => {
    const [fullName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const log = {fullName, email, password};
        fetch('http://localhost:3001/auth/registration', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(log),
        }).then(
            function(response){
                if (response.ok){
                    sessionStorage.setItem('authorized', 1);
                    response.json().then(function (data) {
                        sessionStorage.setItem('name', data.fullName);
                        sessionStorage.setItem('token', data.token);
                        window.location.replace("/");
                    })
                }
                else{
                    alert('Ошибка регистрации, попробуйте ещё раз');
                }
            }
        )

        console.log( JSON.stringify(log));
    }
    
    return (
        <section className="enter_section">
            <div className="img_enter">
                <img src="img/cod_home_section2-1536x1491.png" alt="" />
            </div>
            <div className="login">
                <div className="login_logo">
                    <img src="img/logo-main.svg" alt="" />
                </div>
                <form onSubmit={handleSubmit}>
                    <p>Full name</p>
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder = "Type your name" value = {fullName} name="name" id="name" />
                    <p>E-mail</p>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder = "Type your e-mail" value = {email} name="email" id="email" />
                    <p>Password</p>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder = "Type your password" value = {password} name="password" id="password" />
                    <input type="submit" value="Register" />
                </form>
                <p><Link to="/login">Log In</Link></p>
            </div>
        </section>
    )
}

export default EnterSection;
