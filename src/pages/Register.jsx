import { Link } from 'react-router-dom';
import style from './Auth.module.css';
import logo from '../assets/img/logo.png';

export function Register() {
    return (
        <>
            <h1>Register</h1>

            <form className={style.form}>
                REGISTER FORM
            </form>

            <p className={style.or}>or sign up with</p>
            <p className={style.pLink}>Already have an account? <Link to='/login'>Log in</Link></p>
        </>
    );
}