import {createRouter, createWebHashHistory} from "vue-router";


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/Home/Home.vue')
    },
    {
      path: '/favor',
      component: () => import('@/views/Favor/Favor.vue')
    },
    {
      path: '/order',
      component: () => import('@/views/Order/Order.vue')
    },
    {
      path: '/message',
      component: () => import('@/views/Message/Message.vue')
    },
    {
      path: '/cite',
      component: () => import('@/views/City/City.vue'),
      meta: {
        showTabBar: true
      }
    },
    {
      path: '/search',
      component: () => import('@/views/Search/Search.vue'),
      meta: {
        showTabBar: true
      }
    },
    {
      path: '/goodDetail/:id',
      component: () => import('@/views/GoodDetail/HouseDetails.vue'),
      meta: {
        showTabBar: true
      }
    }
  ]
});
export default router;
