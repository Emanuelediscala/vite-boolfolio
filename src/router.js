import {createRouter,createWebHistory} from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppContactUs from './pages/AppContactUs.vue';
import ProjectCard from './pages/ProjectCard.vue';

const router = createRouter({
    history:createWebHistory(),
    routes : [
        {
            path: "/",
            name: "home",
            component: AppHome

        },
        {
            path: "/contact-us",
            name: "contact-us",
            component: AppContactUs

        },
        {
            path: "/project-card",
            name: "project-card",
            component: ProjectCard

        },

    ]
});


export {router}