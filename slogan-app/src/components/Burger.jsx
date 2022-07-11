import React from 'react'

const Burger = () => {    
    return (
        <div className="burger" onClick={() => {
            document.querySelector('.navigation_wrapper').classList.toggle('isActivate');
        }}>
            <div className="burger_line"></div>
            <div className="burger_line"></div>
            <div className="burger_line"></div>
        </div>
    )
}

export default Burger;