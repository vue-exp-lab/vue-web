<script>
import konva from 'konva'
import Controller from '@/components/EditorPage/lib/Controller'

export default {
  name: 'Editor',
  created: function () {
  },
  mounted: function () {
    const width = window.innerWidth
    const height = window.innerHeight

    const c = new Controller ('container',width, height)
  },
  methods: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  text-align: center;
}
#container {
  border: 1px lightgray solid;
}
</style>

<template>
  <div class="wrapper">
    <p>I am editor</p>
    <div id="container"></div>
  </div>
</template>
