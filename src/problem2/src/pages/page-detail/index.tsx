import React from 'react'
import Breadcrumb from '../../components/common/breadcrumb'
import FrequentlyAskedQuestions from '../frequently-asked-question'
import './index.css';

const OtherExpert = () => {
    return (
        <div>
            <section className='container-our' data-overlay-dark="6">
                <div className="container-our-service">
                    <Breadcrumb
                        headTitle="Page"
                        fromTitle="Home"
                        fromHref="/"
                        toTitle="Page"
                        toHref="#faq"
                    />
                </div>
            </section>
            <FrequentlyAskedQuestions />
        </div>
    )
}

export default OtherExpert