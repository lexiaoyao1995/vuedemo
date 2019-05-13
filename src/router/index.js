import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '../components/Demo'

import Children1 from '../components/Children1'
import Children2 from '../components/Children2'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Demo',
      name: 'Demo',
      component: Demo,
      children: [
        // {
        //   path:'/',
        //   component:Demo
        // },
        {
          path: '/c1',
          name: 'c1',
          component: Children1
        },
        {
          path: '/c2',
          name: 'c2',
          component: Children2
        }
      ]
    }
  ]
})
