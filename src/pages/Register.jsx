import { Link } from 'react-router-dom';
import style from './Auth.module.css';
import formStyle from './Form.module.css';
import { useState, useEffect } from 'react';

export function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

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
            newErrors.push('Username netinkamo ilgio');
        }

        if (password.length < minPasswordLength || password.length > maxPasswordLength) {
            newErrors.push('Password netinkamo ilgio');
        }

        setErrors(newErrors);

        if (!errors.length) {
            setUsers((prev) => [...prev, { username, password }]);
            } else {
            fetch('http://localhost:3001/api', {
                method: 'GET',
            }).then(res => res.json())
                .then(data => console.log(data));
        }
    }

    return (
        <>
            <h1>Register</h1>
            <div className={`${formStyle.error} ${errors.length ? formStyle.show : ''}`}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
            </div>

            <form className={formStyle.form}>
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
                    <Link to='/login'>To login</Link>
                </div>
            </form>

            <p className={style.or}>or sign up with</p>
            <p className={style.pLink}>Already have an account? <Link to='/login'>Log in</Link></p>
        </>
    );
}