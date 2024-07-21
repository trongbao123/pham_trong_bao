import React from 'react'
import './index.css'
type SloganProps = {
    dataName?: string,
    title?: string,
    subTitle?: string,
    className?: string,
    [key: string]: any
}
const Slogan: React.FC<SloganProps> = ({
    dataName = "",
    title,
    subTitle,
    className,
    ...rest
}) => {
    return (
        <div
            className={`section-heading ${className}`}
            data-name={dataName}
            {...rest}
        >
            <span>{title}</span>
            <h2>{subTitle}</h2>
        </div>

    )
}

export default Slogan