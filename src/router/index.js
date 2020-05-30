import Vue from 'vue';
import VueRouter from 'vue-router'

import Posts from '../components/Posts'
import Blog from  '../components/Blog'
import SinglePost from '../components/SinglePost'


Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        component: Posts
    },
    {
        path: '/add',
        component: Blog
    },
    {
        path: '/blog/:id',
        component: SinglePost
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;