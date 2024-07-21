import React from 'react';
import './index.css';
import { brandData } from '../../data/mockData';

const Brand = () => {
    const renderBrand = () => {
        return brandData.map((item, index) => {
            return (
                <div className="brand-card" key={item.id}>
                    <div className="brand-card-header">
                        <div className="brand-img">
                            <img src={item.url} alt="logo" />
                        </div>
                        <div className="order-brand">0{item.id}</div>
                    </div>
                    <div className="brand-card-text">
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div id="brand" className='container'>
            <div className="row-2">
                <div className="logo-brand">
                    <img src="https://crypto.websitelayout.net/img/content/zigzag-01.png" alt="logo" />
                </div>
                <div className="brand-content">
                    <h2>BrandCoin Just Entered the Real World.</h2>
                    <p>A cryptocurrency is a shape of virtual asset primarily based totally on a community this is disbursed throughout a big range of computers.</p>
                    <div className="grid">
                        {renderBrand()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand;