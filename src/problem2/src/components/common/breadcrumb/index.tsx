import React from 'react'
import './index.css'
import { ArrowRightOutlined } from '@ant-design/icons'
import RouterString from '../../../routers/routerString'

type BreadcrumbProps = {
    headTitle?: string,
    fromHref?: string,
    toHref?: string,
    fromTitle?: string,
    toTitle?: string
}
const Breadcrumb: React.FC<BreadcrumbProps> = ({
    headTitle,
    fromHref = RouterString.Home,
    toHref,
    fromTitle = "Home",
    toTitle
}) => {
    return (
        <div className="page-title">
            <h1>{headTitle}</h1>
            <div className="breadcrumb">
                <ul>
                    <li><a href={fromHref}>{fromTitle}</a></li>
                    <li><ArrowRightOutlined style={{ marginRight: '5px', marginLeft: '5px', color: '#fff' }} /></li>
                    <li><a href={toHref}>{toTitle}</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Breadcrumb