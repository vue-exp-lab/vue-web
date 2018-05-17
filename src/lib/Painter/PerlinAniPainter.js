
import SimplexNoise from '@/lib/simplex-noise'
import Abstract from '@/lib/Painter/Abstract'

const random = (min=1, max=10) => min + Math.floor(Math.random() * Math.floor(max));

export default class PerAnilinPainter extends Abstract {
    constructor(_w){
        super(_w)
        this.timeSeed = random(1, 100)
        this.simplex = new SimplexNoise(100)
    }
    getAph = (x,y) => {
        const timeSeed = this.timeSeed / 10000000
        const _w = this._w
        const _x = 10* (x)/_w
        const _y = 10* (y)/_w
        const unit = Math.PI/2

        const seedSin = Math.abs(Math.sin(timeSeed + unit * this.simplex.noise3D(_x,_y)))
        const seedCos = Math.abs(Math.cos(timeSeed + unit * this.simplex.noise3D(_x,_y)))

        this.timeSeed += 1
        return 100 + 155 * this.simplex.noise3D(seedSin,seedCos)
        // return 100 + 155 * seedSin
    }
}
