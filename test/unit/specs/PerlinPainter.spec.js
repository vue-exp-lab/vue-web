import PerlinPainter from '@/lib/Painter/PerlinPainter'

const w = 20

function ImageData(w, h){
	return {data: new Array(w*h*4)}
}
global.ImageData = ImageData

describe(' - ', () => {
	it(' - ', () => {
		const p = new PerlinPainter(w)
		console.log(' ---', p.paint())
	})
})