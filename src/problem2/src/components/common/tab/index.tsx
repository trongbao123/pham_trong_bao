import React, { ReactNode, useState } from 'react';
import "../tab/index.css";
type TabProps = {
    tabList?: any[];
    children?: ReactNode;
    activeTab?: number;
    handleTabClick?: (index: number) => void;
    width?: string | number;
    className?: string;
    [key: string]: any;
}
const Tab: React.FC<TabProps> = ({
    tabList,
    children,
    activeTab = 0,
    width = "70%",
    className,
    handleTabClick,
    ...rest
}) => {


    const renderTabList = () => {
        return tabList?.map((item, index) => {
            return (
                <li
                    key={item}
                    className={`resp-tab-item hor_1 ${activeTab === index ? 'resp-tab-active' : ''}`}
                    aria-controls={`hor_1_tab_item-${index}`}
                    role="tab"
                    onClick={() => (handleTabClick as any)(index)}
                >
                    <div className="tab-box">
                        {item}
                    </div>
                </li>
            )
        })
    };


    return (
        <>
            <ul
                {...rest}
                style={{ width: width, }}
                className={`${className} resp-tabs-list hor_1`}
            >
                {renderTabList()}
            </ul>
            <div>
                {children}
            </div>
        </>

    )
}

export default Tab