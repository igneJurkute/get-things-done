import { Link, Outlet } from 'react-router-dom';
import style from '../pages/Auth.module.css';
import logo from '../assets/img/logo.png';

export function AuthLayout() {
    return (
        <div className={style.welcome}>
            <img className={style.logo} src={logo} alt="Img" />
            <Outlet />
            <div className={style.socials}>
                <button>FB</button>
                <button>GG</button>
                <button>AP</button>
            </div>
        </div>
    );
}