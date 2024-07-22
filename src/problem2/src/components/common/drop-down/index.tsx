import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { CaretDownOutlined } from '@ant-design/icons'

type DropDownProps = {
    children?: React.ReactNode
    className?: string,
    href?: any,
    title?: string,
    [key: string]: any
}
const DropDown: React.FC<DropDownProps> = ({
    children,
    className,
    href,
    title,
    ...rest
}) => {
    const [showDropdown, setShowDropdown] = useState(false);


    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };
    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`has-sub ${className} `}
            {...rest}
        >
            <span className='submenu-button'></span>
            <Link to={href}>{title} <CaretDownOutlined /></Link>
            {showDropdown && (
                <ul className="sub-menu">{children}</ul>
            )}
        </div>
    )
}


export default DropDown;
