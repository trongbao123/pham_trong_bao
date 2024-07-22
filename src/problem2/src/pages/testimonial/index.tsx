import React from 'react';
import './index.css';
import Slogan from '../../components/common/slogan';
import Carousel from '../../components/common/carousel';
import { testimonialData } from '../../data/mockData';
import { MessageOutlined } from '@ant-design/icons';
const Testimonial = () => {
    const responsive = [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    return (
        <div id="testimonials" className="container">
            <Slogan
                id="testimonials"
                dataName="T"
                title='TESTIMONIALS'
                subTitle='What Our Investors Say'
                style={{ marginTop: '50px' }}
            />
            <Carousel
                responsive={responsive}
                slidesToShow={2}
                slidesToScroll={2}
                arrows={false}
                autoplaySpeed={6000}
                speed={1000}
                dots={true}
                autoplay={false}
                className="carousel-testimonial"
            >
                {renderTestimonial()}
            </Carousel>
        </div>
    )
}
const renderTestimonial = () => {
    return testimonialData.map((item) => {
        return (
            <div className="card-testimonial" key={item.id}>
                <div className="img-testimonial">
                    <img src={item.url} alt="img" />
                </div>
                <div className="text-testimonial">
                    <p>{item.description}</p>
                    <div className="info-testimonial">
                        <MessageOutlined style={{ color: '#f9b707', fontSize: '30px' }} />
                        <div className="name-testimonial">
                            <h3>{item.name}</h3>
                            <h4>{item.title}</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
}
export default Testimonial