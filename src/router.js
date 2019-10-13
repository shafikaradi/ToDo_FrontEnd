import Vue from "vue"
import VueRouter from 'vue-router';

import Home from './components/Home.vue'
import ToDoList from './components/ToDoList.vue'

Vue.use(VueRouter);


const routes =  [

    

        {
            path: '/',
            name:'Home',
            component: Home

        },
        {
            path: '/ToDoList',
            component: ToDoList

        }

    

]



const router = new VueRouter({routes})
export default router