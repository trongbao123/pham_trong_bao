import React from 'react';
import Carousel from '../../components/common/carousel';
import { roadMapData } from '../../data/mockData';
import './index.css';
import Slogan from '../../components/common/slogan';
const Roadmap = () => {
    return (
        <div id="roadmap" className='container'>
            <Slogan
                dataName="R"
                title='ROADMAP'
                subTitle='Our Roadmap'
                style={{ marginTop: '50px' }}
            />
            <Carousel
                arrows={false}
            >
                {renderRoadmap()}
            </Carousel>
        </div>
    )
}

const renderRoadmap = () => {
    return roadMapData.map((item) => {
        return (
            <div className="roadmap-item" key={item.id}>
                <h1>{item.date}</h1>
                <p>{item.title}</p>
            </div>
        )
    })
}
export default Roadmap