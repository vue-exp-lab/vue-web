import Vue from 'vue'
import Router from 'vue-router'
import PerlinPage from '@/components/PerlinPage/Page'
import EditorPage from '@/components/EditorPage/Page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Perlin',
      component: PerlinPage
    },
    {
      path: '/editor',
      name: 'Editor',
      component: EditorPage
    }
  ]
})
