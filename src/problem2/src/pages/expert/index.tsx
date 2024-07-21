import React from 'react'
import Slogan from '../../components/common/slogan';
import { expertData } from '../../data/mockData';
import Card from '../../components/common/card';
import './index.css';
const Expert = () => {
    return (
        <div id="expert" className="container">
            <Slogan
                dataName="T"
                title='OUR TEAM'
                subTitle='Meet Our Expert Team'
                style={{ marginTop: '50px' }}
            />
            <div className="row-expert">
                {renderExpert()}
            </div>
        </div>
    )
}

const renderExpert = () => {
    return expertData.map((item) => {
        return (
            <Card
                key={item.id}
                width={300}
                className="card-expert"
            >
                <div className="img-expert">
                    <img src={item.url} alt="img" />
                </div>
                <div className="text-expert">
                    <h4>{item.title}</h4>
                    <h2>{item.name}</h2>
                </div>
            </Card>
        )
    })
}
export default Expert;