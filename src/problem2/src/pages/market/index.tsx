import React from 'react'
import Slogan from '../../components/common/slogan';
import Card from '../../components/common/card';
import './index.css';
import { marketData } from '../../data/mockData';
import { SwapOutlined } from '@ant-design/icons';

const renderCard = () => {
    return marketData.map((item, index) => {
        return (
            <Card
                key={item.id}
                width={300}
                className="card-market"
            >
                <div className="icon-market">
                    <img src={item.icon} alt="img" />
                </div>
                <h3 >{item.name}</h3>
                <h5 className="card-title-market">{item.price}</h5>
                <div className="line"></div>
                <div className="change-market">
                    <p>{item.change}</p>
                    <SwapOutlined style={{ marginLeft: '10px', marginRight: '10px' }} />
                    <p>{item.name}</p>
                </div>
                <p className="rate">Rate: {item.rate}</p>
            </Card>
        )
    })
}

const Market = () => {

    return (
        <div id="market" className="market-container">
            <Slogan
                dataName="S"
                title='BUY & SELL BITCOIN'
                subTitle='Track The Live Market'
                style={{ marginTop: '150px' }}
                className="slogan-market"
            />
            <div className="row">
                {renderCard()}
            </div>
        </div>
    )
}

export default Market;