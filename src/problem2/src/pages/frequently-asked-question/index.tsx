import React from 'react'
import Slogan from '../../components/common/slogan'
import Tab from '../../components/common/tab'
import { tabHeader, tablist } from '../../data/mockData'
import Collapse from '../../components/common/collapse'
import useFAQS from '../../hooks/useFAQS'

type Props = {
    [key: string]: any
}
const FrequentlyAskedQuestions: React.FC<Props> = (props) => {
    const {
        handleTabClick,
        activeTab
    } = useFAQS({ ...props });

    const renderTabList = () => {
        return tablist.map((item) => (
            <Collapse
                key={item.id}
                title={item.title}
                defaultOpen={true}
                width={'100%'}
                className="collapse-container"
            >
                {item.description}
            </Collapse>
        ))
    }

    return (
        <div id="faq" className='container'>
            <Slogan
                dataName="F"
                title='FAQS'
                subTitle='Frequently Asked Questions'
                style={{ marginTop: '50px' }}

            />
            <Tab
                tabList={tabHeader}
                handleTabClick={handleTabClick}
                activeTab={activeTab}
                className="tab-container"

            >
                <div className="tab-content">
                    {renderTabList()}
                </div>
            </Tab>
        </div>
    )
}

export default FrequentlyAskedQuestions