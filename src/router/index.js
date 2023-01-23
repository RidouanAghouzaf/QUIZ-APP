import {createRouter,createWebHistory} from 'vue-router'

import Home from '../components/pages/Home.vue'
 import Score from '../components/pages/Score.vue'
import Settings from '../components/pages/Settings.vue'
import Topics from '../components/pages/Topics.vue'
 import Quiz from '../components/pages/Quiz.vue'



const routes = [
    {
        path:'/',
        component: Home
    },
    {
    path: '/Score',
    component: Score
    },
    {
    path: '/Settings',
    component: Settings
    },
    {
    path:'/Quiz',
    component: Quiz
    },
    {
    path:'/Topics',
    component: Topics
    }

]



const router =createRouter({
    history: createWebHistory(),
    routes,
})
export default router