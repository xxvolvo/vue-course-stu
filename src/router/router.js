import Home from '@/views/Home.vue'
export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    beforeEnter: (to, from, next) => {
      //路由独享守卫钩子
      next();
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {

    },
    meta:{
      title:'关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [{
      path: 'child',
      name: 'child',
      component: () => import('@/views/child.vue')
    }]
  },
  {
    path: '/name_view',
    components: {
      default: () => import("@/views/child.vue"),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  // {
  //   path: '/main',
  //   redirect: '/'
  // },
  // {
  //   path: '/main2',
  //   redirect: to => {
  //     //TODO 逻辑处理
  //     return '/'
  //     //  return {
  //     //    name:"/"
  //     //  }
  //   }
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  // {
  //   path: '*',
  //   component: () => import('@/views/error_404.vue')
  // }

]
