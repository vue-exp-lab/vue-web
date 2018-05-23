
import SimplexNoise from '@/lib/noise/simplex-noise'
import Abstract from '@/lib/Painter/Abstract'

export default class PerlinPainter extends Abstract {
  constructor (_w) {
    super(_w)
    this.simplex = new SimplexNoise(100)
  }
    getAph = (x, y) => {
      const _w = this._w
      const _x = 10 * x / _w
      const _y = 10 * y / _w
      const unit = Math.PI / 2

      const seedSin = Math.abs(Math.sin(unit * this.simplex.noise2D(_x, _y)))
      const seedCos = Math.abs(Math.cos(unit * this.simplex.noise2D(_x, _y)))

      return 100 + 155 * this.simplex.noise2D(seedSin, seedCos)
    }
}
