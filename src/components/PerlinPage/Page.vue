
<template>
  <div class="wrapper">
    <canvas
      ref="canvasArea"
      v-on:click="onClickHandler"
      v-bind:width="w"
      v-bind:height="h"
      style="border:1px solid #000000"/></canvas>
    <div>
      {{x}} , {{y}}
      {{w}}
      {{msg}}
    </div>
  </div>
</template>

<script>
import PerlinAniPainter from '@/lib/Painter/PerlinAniPainter'

const _w = 500

export default {
  name: 'Perlin Noise',
  created: function () {
    this.Painter = new PerlinAniPainter(_w)
  },
  mounted: function () {
    this.canvas = this.$refs['canvasArea'].getContext('2d')
    window.requestAnimationFrame(this.recursivePaint.bind(this))
  },
  methods: {
    recursivePaint: function () {
      this.canvas.putImageData(this.Painter.paint(), 0, 0)
      window.requestAnimationFrame(this.recursivePaint)
    },
    onClickHandler: function (e) {
      console.log(' -=-=-=-= onClickHandler -=-=-=-=')
      const {offsetX, offsetY} = e
      this.x = offsetX
      this.y = offsetY
    }
  },
  data () {
    return {
      w: _w,
      h: _w,
      x: null,
      y: null,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  text-align: center
}
</style>
