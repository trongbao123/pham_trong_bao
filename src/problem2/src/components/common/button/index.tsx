
import React, { ButtonHTMLAttributes } from 'react';
import "../button/index.css";
type ButtonCustomProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode,
    className?: string,
    id?: string;
    type?: string;
    disabled?: boolean;
    title?: string;
    value?: string;
    onClick?: () => void;
    width?: string | number;
    height?: string | number;
}
const ButtonCustom: React.FC<ButtonCustomProps> = ({
    children,
    className,
    width = "140px",
    height = "45px",
    ...rest
}) => {

    return (
        <button
            style={{ width: width, height: height }}
            className={`${className} butn primary-butn md border border-primary `}
            {...rest}
        >
            {children}
        </button>
    )
}

export default ButtonCustom