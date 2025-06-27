import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/img/logo-pure.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import style from '../pages/Account.module.css';

export function AccountLayout() {
     const [menuVisibility, setMenuVisibility] = useState(false);

    const menuList1 = [
        {
            type: 'link',
            id: 'm11',
            icon: <GiHamburgerMenu className={style.linkIcon} size='1.5rem' />,
            title: 'Link 1',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm12',
            icon: <GiHamburgerMenu className={style.linkIcon} size='1.5rem' />,
            title: 'Link 2',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm13',
            icon: <GiHamburgerMenu className={style.linkIcon} size='1.5rem' />,
            title: 'Link 3',
            url: '/tasks',
        },
        {
            type: 'line',
        },
        {
            type: 'link',
            id: 'm21',
            icon: <GiHamburgerMenu className={style.linkIcon} size='1.5rem' />,
            title: 'Link 4',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm22',
            icon: <GiHamburgerMenu className={style.linkIcon} size='1.5rem' />,
            title: 'Link 5',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm23',
            icon: <GiHamburgerMenu className={style.linkIcon} size='1.5rem' />,
            title: 'Link 6',
            url: '/tasks',
        },
        {
            type: 'line',
        },
        {
            type: 'link',
            id: 'm31',
            icon: <GiHamburgerMenu className={style.linkIcon} size='1.5rem' />,
            title: 'Link 7',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm32',
            icon: <GiHamburgerMenu className={style.linkIcon} size='1.5rem' />,
            title: 'Link 8',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm33',
            icon: <GiHamburgerMenu className={style.linkIcon} size='1.5rem' />,
            title: 'Link 9',
            url: '/tasks',
        },
    ];

    function updateMenuVisibility() {
        setMenuVisibility(!menuVisibility);
    }

    return (
        <div>
            <header className={style.header}>
                <img className={style.logo} src={logo} alt="Logo" />
                {menuVisibility && (
                    <div className={style.menuContent}>
                        <GrClose onClick={updateMenuVisibility} className={style.menuIcon} size='2.5rem' />
                        <nav className={style.menu}>
                            {
                                menuList1.map(link => {
                                    if (link.type === 'line') {
                                        return <hr />;
                                    }
                                    if (link.type === 'link') {
                                        return (
                                            <Link key={link.id} to={link.url}>
                                                {link.icon}{link.title}
                                            </Link>
                                        );
                                    }

                                    return <>ERROR</>;
                                })
                            }
                        </nav>
                    </div>
                )}
                <GiHamburgerMenu onClick={updateMenuVisibility} className={style.menuIcon} size='2.5rem' />
            </header>
            <Outlet />
        </div>
    );
}