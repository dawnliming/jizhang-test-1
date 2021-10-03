import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from "@/views/EditLabel.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/money'
    },
    {
        path: '/money',
        component: Money,
        meta:{
            title:'记一笔账'
        }
    },
    {
        path: '/labels',
        component: Labels,
        meta:{
            title:'标签一览'
        }
    },
    {
        path: '/statistics',
        component: Statistics,
        meta:{
            title:'统计一哈'
        }
    },
    {
       path:'/labels/edit/:id',
       component: EditLabel,
        meta:{
            title:'管管标签'
        }
    },
    {
        path: '*',
        component: NotFound,
        meta:{
            title:'网址不对'
        }
    }
];

const router = new VueRouter({
    routes
});

export default router;
