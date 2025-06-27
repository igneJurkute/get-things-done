import { Outlet } from 'react-router-dom';
import style from '../pages/Auth.module.css';
import logo from '../assets/img/logo.png';
import { useEffect, useState } from 'react';

export function AuthLayout() {
    const [click, setClick] = useState(() => JSON.parse(localStorage.getItem('logo')) || 0);
    useEffect(() => {
        localStorage.setItem('logo', JSON.stringify(click));
    }, [click]);

    function updateCount() {
        setClick(click + 1);
    }

    return (
        <div className={style.welcome}>
            <img className={style.logo} onClick={updateCount} src={logo} alt="Img" />
            <Outlet />
            <div className={style.socials}>
                <button>FB</button>
                <button>GG</button>
                <button>AP</button>
            </div>
        </div>
    );
}