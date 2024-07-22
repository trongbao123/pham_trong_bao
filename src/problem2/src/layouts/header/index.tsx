import React from 'react';
import './index.css';
import { navList } from '../../data/mockData';
import DropDown from '../../components/common/drop-down';
import ButtonCustom from '../../components/common/button';
import { Link } from 'react-router-dom';
import useHeader from '../../hooks/useHeader';
import { CloseOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
export default function Header() {
    const {
        navbar,
        handleBuyNow,
        handleSearch,
        openSearch,
        handleActive,
        active,
        openMenu,
        onClose,
        showDrawer
    } = useHeader();
    const renderNav = () => {
        return (
            navList.map((item) => (
                <DropDown
                    onClick={() => handleActive(item.id)}
                    active={item.id}
                    key={item.id}
                    href={item.href}
                    title={item.name}
                    className={`${navbar ? "nav-header" : ""} ${active === item.id ? "active" : ""}`}
                >
                    {item.children?.map((child) => (
                        <a href={child.href} className='child-sub' key={child.id}>{child.name}</a>
                    ))}
                </DropDown>
            ))
        )
    };

    return (
        <header className='header-style1 scrollHeader'>
            <div className="navbar-default">
                <div className={`top-search ${openSearch === true ? "open-search" : ""}`} >
                    <div className="container-search">
                        <form className="search-form" action="search.html" method="GET" acceptCharset="utf-8">
                            <div className="input-group">
                                <span className="input-group-addon cursor-pointer">
                                    <button className="search-form_submit fas fa-search display-28 text-white" type="submit" />
                                </span>
                                <input type="text" className="search-form_input form-control" name="s" autoComplete="off" placeholder="Type & hit enter..." />
                                <span className="input-group-addon close-search mt-1" onClick={handleSearch}><CloseOutlined style={{ color: '#fff', fontSize: '1.1rem' }} /></span>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="header" className={`header ${navbar ? "menu-sticky" : ""}`}>
                    <div className="header-container" >
                        <Link to="/" className="logo">
                            <img src={navbar ? "https://crypto.websitelayout.net/img/logos/logo.png" : "https://crypto.websitelayout.net/img/logos/logo-inner.png"} alt="logo" />
                        </Link>
                        <nav className="nav-menu">
                            {renderNav()}
                        </nav>
                        <div className='header-right-search'>
                            <div className='search' onClick={handleSearch}>
                                <SearchOutlined className={navbar ? 'search-icon-dark' : 'search-icon'} />
                            </div>
                            <ButtonCustom className='buy-res' onClick={handleBuyNow}>
                                BUY NOW
                            </ButtonCustom>
                            <ButtonCustom className='show-drawer' height={'40px'} width={'50px'} onClick={showDrawer}>
                                <MenuOutlined style={{ fontSize: '20px' }} />
                            </ButtonCustom>
                        </div>
                    </div>
                </div>
            </div>

            <Drawer
                width={'250px'}
                placement={'right'}
                closable={false}
                onClose={onClose}
                open={openMenu}
                key={'right'}
                className='drawer-menu'
            >
                <div className='nav-drawer'>
                    {renderNav()}
                </div>
            </Drawer>
        </header>

    )
}
