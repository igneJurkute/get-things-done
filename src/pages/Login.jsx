import { Link } from 'react-router-dom';
import style from './Auth.module.css';
import logo from '../assets/img/logo.png';

export function Login() {
    return (
        <>
            <h1>Login</h1>

            <form className={style.form}>
                LOGIN FORM
                <Link to='/tasks'>To account</Link>
            </form>

            <p>or sign in with</p>
            <p>Don't have an account? <Link to='/register'>Register</Link></p>
        </>
    );
}