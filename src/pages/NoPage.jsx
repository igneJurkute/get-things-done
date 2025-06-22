import { Link } from 'react-router-dom';
import style from './Welcome.module.css';
import logo from '../assets/img/logo.png';

export function NoPage() {
    return (
        <div className={style.welcome}>
            <img className={style.logo} src={logo} alt="Img" />
            <h1>404</h1>
            <p>Page not found.</p>
            <Link to='/' className={style.link}>Go home</Link>
        </div>
    );
}