import React from 'react'
import Breadcrumb from '../../components/common/breadcrumb'
import Expert from '../expert'
import './index.css';
const OtherExpert = () => {
    return (
        <div>
            <section className='container-our' data-overlay-dark="6">
                <div className="container-our-service">
                    <Breadcrumb
                        headTitle="Expert"
                        fromTitle="Home"
                        fromHref="/"
                        toTitle="Expert"
                        toHref="#expert"
                    />
                </div>
            </section>
            <Expert />
        </div>
    )
}

export default OtherExpert