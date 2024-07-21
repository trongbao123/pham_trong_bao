import lazyLoad from '../components/common/lazy-load';
import RouterString from './routerString';

const PageErr = () => import('../pages/404/PageErr');
const Home = () => import('../pages/home');
const Service = () => import('../pages/our-service');
const Blog = () => import('../pages/list-blog');
const Expert = () => import('../pages/other-expert');
const Page = () => import('../pages/page-detail');


const pages = [
    {
        path: RouterString.PageNotFound,
        component: lazyLoad(PageErr),
    },
    {
        path: RouterString.Home,
        component: lazyLoad(Home),
    },
    {
        path: RouterString.Service,
        component: lazyLoad(Service),
    },
    {
        path: RouterString.Expert,
        component: lazyLoad(Expert),
    },
    {
        path: RouterString.Blog,
        component: lazyLoad(Blog),
    },
    {
        path: RouterString.Page,
        component: lazyLoad(Page),
    }
]

export default pages;