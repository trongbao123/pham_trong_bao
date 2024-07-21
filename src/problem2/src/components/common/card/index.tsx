import React from 'react';
import './index.css';

type CardProps = {
    children?: React.ReactNode,
    className?: string,
    width?: string | number,
    height?: string | number,
    [key: string]: any
}
const Card: React.FC<CardProps> = ({
    children,
    className,
    width = '350px',
    height,
    ...rest
}) => {
    return (
        <div
            className={`card ${className}`}
            style={{
                width: width,
                height: height
            }}
            {...rest}
        >
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default Card