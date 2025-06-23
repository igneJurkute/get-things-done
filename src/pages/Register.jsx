import { Link } from 'react-router-dom';
import style from './Auth.module.css';
import formStyle from './Form.module.css';
import { useState } from 'react';

export function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    function updateUsername(e) {
        setUsername(e.target.value);
    }

    function updatePassword(e) {
        setPassword(e.target.value);
    }

    function registerUser(e) {
        const minUsernameLength = 3;
        const maxUsernameLength = 20;
        const minPasswordLength = 6;
        const maxPasswordLength = 100;
        e.preventDefault();

        const newErrors = [];
        if (username.length < minUsernameLength || username.length > maxUsernameLength) {
            newErrors.push('klaida: username...');
        }

        if (password.length < minPasswordLength || password.length > maxPasswordLength) {
            newErrors.push('klaida: password...');
        }

        setErrors(newErrors);

        if (!errors.length) {
            console.log('register...');
            console.log({ username, password });
        }
    }

    return (
        <>
            <h1>Register</h1>
            <div className={`${formStyle.error} ${errors.length ? formStyle.show : ''}`}>Add commentMore actions
                {errors.map(err => <p>{err}</p>)}
            </div>

            <form className={formStyle.form}>Add commentMore actions
                <div className={formStyle.row}>
                    <label htmlFor="username">Username</label>
                    <input onChange={updateUsername} value={username} id='username' type="text" />
                </div>
                <div className={formStyle.row}>
                    <label htmlFor="password">Password</label>
                    <input onChange={updatePassword} value={password} id='password' type="password" />
                </div>
                <div className={formStyle.row}>
                    <button onClick={registerUser} type="submit">Register</button>
                </div>
            </form>

            <p className={style.or}>or sign up with</p>
            <p className={style.pLink}>Already have an account? <Link to='/login'>Log in</Link></p>
        </>
    );
}