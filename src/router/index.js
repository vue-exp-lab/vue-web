import Vue from 'vue'
import Router from 'vue-router'
import Perlin from '@/components/Perlin'
import Editor from '@/components/Editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Perlin',
      component: Perlin
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    }
  ]
})
