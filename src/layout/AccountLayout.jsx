import { Outlet } from 'react-router-dom';
import style from '../pages/Auth.module.css';

export function AccountLayout() {
    return (
        <div>
            <header>
                ACCOUNT HEADER
            </header>
            <Outlet />
        </div>
    );
}