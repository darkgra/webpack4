import ly from 'vue-router';

import yi from './zujians/1.vue';
import er from './zujians/2.vue';
import san from './zujians/3.vue';
import si from './zujians/4.vue';
import yi3 from './zujians/13.vue';
import yi33 from './zujians/133.vue'

const router = new ly({
    routes: [{
            path: '/',
            redirect: '/home'

        },
        {
            path: '/home',
            component: yi

        },
        {
            path: '/vip',
            component: er

        },
        {
            path: '/shopcar',
            component: san

        },
        {
            path: '/search',
            component: si

        },
        {
            path: '/home/sanxin',
            component:yi3
        },
        {
            path: '/home/sanxin/sansan',
            component:yi33
        }
    ],
    linkActiveClass: 'mui-active'
})

export default router