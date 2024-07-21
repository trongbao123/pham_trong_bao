import React from 'react'
import './index.css';
import Slogan from '../../components/common/slogan';
import { serviceData } from '../../data/mockData';
const Service = () => {
    const renderService = () => {
        return serviceData.map((item) => {
            return (
                <div className="service-item" key={item.id}>
                    <h1>{item.title}</h1>
                    <div className="line"></div>
                    <div>
                        <img src={item.url} alt="" />
                    </div>
                    <p>{item.subtitle}</p>
                </div>
            )
        })
    }
    return (
        <section id="service" className='container'>
            <Slogan
                dataName="S"
                title='OUR SERVICES'
                subTitle='Why Choose Services'
                style={{ marginTop: '50px' }}
            />
            <div className="row-service">
                {renderService()}
            </div>
        </section>
    )
}

export default Service;