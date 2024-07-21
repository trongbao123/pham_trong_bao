import React from 'react';
import './index.css';
import Service from '../service-detail';
import Breadcrumb from '../../components/common/breadcrumb';
const OurService = () => {
    return (
        <div>
            <section className='container-our' data-overlay-dark="6">
                <div className="container-our-service">
                    <Breadcrumb
                        headTitle="Our Service"
                        fromTitle="Home"
                        fromHref="/"
                        toTitle="Our Service"
                        toHref="#service"
                    />
                </div>
            </section>
            <Service />
        </div>
    )
}

export default OurService
