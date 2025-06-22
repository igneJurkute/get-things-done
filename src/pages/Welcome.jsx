import { Link } from 'react-router-dom';
import style from './Welcome.module.css';
import logo from '../assets/img/logo.png';

export function Welcome() {
    return (
        <div className={style.welcome}>
            <img className={style.logo} src={logo} alt="Img" />
            <h1>Get things done</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <Link to='/register' className={style.link}>Continue</Link>
        </div>
    );
}