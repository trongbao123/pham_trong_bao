import React from 'react'
import Slogan from '../../components/common/slogan';
import './index.css';
import { blogdata } from '../../data/mockData';
const Blog = () => {
    return (
        <div id="blog" className="container">
            <Slogan
                dataName="B"
                title='OUR BLOG'
                subTitle='Recent Blogs Update'
                style={{ marginTop: '50px' }}
            />
            <div className="row-blog">
                <div className="card-img-blog">
                    <img src="https://crypto.websitelayout.net/img/blog/blog-01.jpg" alt="img" />
                </div>
                <div className="card-blog-right">
                    {renderBlog()}
                </div>
            </div>
        </div>
    )
}

const renderBlog = () => {
    return blogdata.map((item) => {
        return (
            <div className="card-img-blog-1" key={item.id}>
                <div className="card-img-blog-2">
                    <img src={item.img} alt="img" />
                </div>
                <div className="card-content-blog">
                    <h4 className="h5">
                        {item.title}
                    </h4>
                    <span>{item.sub}</span>
                </div>
            </div>
        )
    })
}
export default Blog