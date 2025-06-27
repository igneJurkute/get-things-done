import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/img/logo-pure.png';
import { FaShoppingCart, FaCubes, FaBuilding, FaPlus, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import style from '../pages/Account.module.css';

export function AccountLayout() {
     const [menuVisibility, setMenuVisibility] = useState(false);

    const menuList = [
        {
            type: 'link',
            id: 'm11',
            icon: <FaShoppingCart className={style.linkIcon} size='1.2rem' />,
            title: 'Carts list',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm12',
            icon: <FaCubes className={style.linkIcon} size='1.2rem' />,
            title: 'Products list',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm13',
            icon: <FaBuilding className={style.linkIcon} size='1.2rem' />,
            title: 'Shops list',
            url: '/tasks',
        },
        {
            type: 'line',
        },
        {
            type: 'link',
            id: 'm21',
            icon: <FaPlus className={style.linkIcon} size='1.2rem' />,
            title: 'New cart',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm22',
            icon: <FaPlus className={style.linkIcon} size='1.2rem' />,
            title: 'New product',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm23',
            icon: <FaPlus className={style.linkIcon} size='1.2rem' />,
            title: 'New shop',
            url: '/tasks',
        },
        {
            type: 'line',
        },
        {
            type: 'link',
            id: 'm31',
            icon: <FaUser className={style.linkIcon} size='1.2rem' />,
            title: 'Account',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm32',
            icon: <FaCog className={style.linkIcon} size='1.2rem' />,
            title: 'Settings',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm33',
            icon: <FaSignOutAlt className={style.linkIcon} size='1.2rem' />,
            title: 'Log out',
            url: '/login',
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
                    <>
                        <div onClick={updateMenuVisibility} className={style.lock}></div>
                        <div className={style.menuContent}>
                            <GrClose onClick={updateMenuVisibility} className={style.menuIcon} size='2.5rem' />
                            <nav className={style.menu}>
                                {
                                    menuList.map((link, index) => {
                                        if (link.type === 'line') {
                                            return <hr key={index} />;
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
                    </>
                )}
                <GiHamburgerMenu onClick={updateMenuVisibility} className={style.menuIcon} size='2.5rem' />
            </header>
            <Outlet />
        </div>
    );
}