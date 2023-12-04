import {createRouter,createWebHistory} from 'vue-router'

import Account from '../components/pages/Account.vue'
 import Managementquiz from '../components/pages/Managementquiz.vue'
import Weight from '../components/pages/Weight.vue'
import About from '../components/pages/About.vue'
import Quiz from '../components/pages/Quiz.vue'



const routes = [
    {
        path:'/',
        component: Account
    },
    {
    path: '/Managementquiz',
    component: Managementquiz
    },
    {
    path: '/Weight',
    component: Weight
    },
    {
    path:'/quiz/:category',
    name:'QuizElement',
    component: Quiz
    },
    {
    path:'/About',
    component: About
    }

]



const router =createRouter({
    history: createWebHistory(),
    routes,
})
export default router