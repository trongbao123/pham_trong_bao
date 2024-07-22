import React from 'react';
import './index.css';
import ButtonCustom from '../../components/common/button';
import Carousel from '../../components/common/carousel';
import { carousel } from '../../data/mockData';
import CurrencyForm from './components/CurrencyForm';

const Currency = () => {
    return (

        <div className="currency">
            <div className="container">
                <div className="col-6">
                    <div id="cry-1" className="cry">
                        <h1>Make Better Life With Cryptocurrency.</h1>
                        <p>Its principal aim is to convey 200 million new retail buyers to crypto through casting off all fiat limitations at the manner to crypto.</p>
                        <ButtonCustom className='mb-3'>
                            <a className="read-more" href="#market">READ MORE</a>
                        </ButtonCustom>
                    </div>
                    <CurrencyForm />
                </div>
                <div id="carousel-slick" className="col-12">
                    <div className="slick-head">
                        <h2>We are working with the Best</h2>
                        <Carousel
                            arrows={false}
                            dots={false}
                        >
                            {renderCarruselItem()}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

const renderCarruselItem = () => {
    return (
        carousel.map((item) => {
            return (
                <div className='item-carousel' key={item.id}>
                    <img src={item.url} alt="img" />
                </div>
            )
        })
    )
}
export default Currency