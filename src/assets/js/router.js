import VueRouter from 'vue-router'

import first from '../../components/index/first.vue'
import index from '../../components/index/index.vue'
import classify from '../../components/index/classify.vue'
import must from '../../components/index/must.vue'
import my from '../../components/index/my.vue'
import car from '../../components/index/car.vue'
import search from '../../components/index/search.vue'
import detail from '../../components/index/detail.vue'
import center from '../../components/index/center.vue'

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:first,
            children:[
                {
                    path:"/index",
                    component:index
                },
                {
                    path:"/classify",
                    component:classify
                },
                {
                    path:'/must',
                    component:must
                },
                {
                    path:"/car",
                    component:car
                },
                {
                    path:'/center',
                    component:center
                }
            ],
            redirect:"/index"
        },
        {
            path:'/search/:msg',
            component:search,
            children:[
            ]
        },
        {
            path:'/detail',
            component:detail
        },
        {
            path:'/my',
            component:my
        },
        {
            path:'/**',
            redirect:'/index'
        }
    ]
})