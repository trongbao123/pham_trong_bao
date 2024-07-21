import React from 'react';
import './index.css';
import FrequentlyAskedQuestions from '../frequently-asked-question';
import Currency from '../currency';
import Market from '../market';
import Brand from '../brand';
import Built from '../built';
import Service from '../service-detail';
import Roadmap from '../roadmap';
import Expert from '../expert';
import Testimonial from '../testimonial';
import Blog from '../blog';
import { Contact } from '../contact';
const Home = () => {
    return (
        <div className="home-container">
            <Currency />
            <Market />
            <Brand />
            <Built />
            <Service />
            <Roadmap />
            <Expert />
            <FrequentlyAskedQuestions />
            <Testimonial />
            <Blog />
            <Contact />
        </div>
    )
}

export default Home;