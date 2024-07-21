import React from 'react';
import Breadcrumb from '../../components/common/breadcrumb';
import Blog from '../blog';
import './index.css';
const ListBlog = () => {
    return (
        <div>
            <section className='container-our' data-overlay-dark="6">
                <div className="container-our-service">
                    <Breadcrumb
                        headTitle="Blog"
                        fromTitle="Home"
                        fromHref="/"
                        toTitle="Blog"
                        toHref="#blog"
                    />
                </div>
            </section>
            <Blog />
        </div>
    )
}

export default ListBlog