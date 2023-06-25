import { createRouter, createWebHistory } from 'vue-router'
// import Router from 'vue-router'

import PostComponent from './components/PostComponent'
import Home from './components/Home'
import Subject from './components/Subject'
import Test from './components/Test'
import Testapi from './components/Testapi'
import Aboutus from './components/Aboutus'
import login from './components/login'
import Maths from './components/Maths'
import Computer from './components/ComputerScience'
import Physics from './components/Physics'
import Chemistry from './components/Chemistry'


//import Header from './components/Header'

// import { defineComponent } from '@vue/runtime-core'
// Vue.use(Router)
// export default defineComponent({
const routes = [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/signup',
            name: 'signup',
            component: PostComponent
        },
        {
            path: '/subject',
            name: 'subject',
            component: Subject
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/testapi',
            name: 'TestApi',
            component: Testapi
        },
        {
            path: '/aboutus',
            name: 'aboutus',
            component: Aboutus
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/maths',
            name: 'maths',
            component: Maths
        },
        {
            path: '/computer',
            name: 'computer',
            component: Computer
        },
        {
            path: '/physics',
            name: 'physics',
            component: Physics
        },
        {
            path: '/chemistry',
            name: 'chemistry',
            component: Chemistry
        }

    ]
    //})
const router = createRouter({
    history: createWebHistory(),
    routes

})
export default router