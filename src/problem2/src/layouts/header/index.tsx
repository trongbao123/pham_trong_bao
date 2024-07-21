import React from 'react';
import './index.css';
import { navList } from '../../data/mockData';
import DropDown from '../../components/common/drop-down';
import ButtonCustom from '../../components/common/button';
import { Link } from 'react-router-dom';
import useHeader from '../../hooks/useHeader';
export default function Header() {
    const { navbar, handleBuyNow } = useHeader();
    const renderNav = () => {
        return (
            navList.map((item) => (
                <DropDown
                    key={item.id}
                    href={item.href}
                    title={item.name}
                    className={navbar ? "nav-header" : ""}
                >
                    {item.children?.map((child) => (
                        <a href={child.href} className='child-sub' key={child.id}>{child.name}</a>
                    ))}
                </DropDown>
            ))
        )
    };

    return (
        <header id="header" className={`${navbar ? "menu-sticky" : ""}`}>
            <div className="header-container" >
                <Link to="/" className="logo">
                    <img src={navbar ? "https://crypto.websitelayout.net/img/logos/logo.png" : "https://crypto.websitelayout.net/img/logos/logo-inner.png"} alt="logo" />
                </Link>
                <nav className="nav-menu">
                    {renderNav()}
                </nav>
                <ButtonCustom onClick={handleBuyNow}>
                    BUY NOW
                </ButtonCustom>
            </div>
        </header>
    )
}
