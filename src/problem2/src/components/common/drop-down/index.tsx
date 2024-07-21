import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

type DropDownProps = {
    children?: React.ReactNode
    className?: string,
    href?: any,
    title?: string
}
const DropDown: React.FC<DropDownProps> = ({
    children,
    className,
    href,
    title
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
            className={`has-sub ${className}`}
        >
            <span className='submenu-button'></span>
            <Link to={href}>{title}</Link>
            {showDropdown && (
                <ul className="sub-menu">{children}</ul>
            )}
        </div>
    )
}


export default DropDown;
