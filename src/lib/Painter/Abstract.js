export default class PerlinPainter {
  constructor (_w) {
    this._w = _w
  }

    getX = (index) => {
      const _w = this._w
      const _x = ~~((~~(index / 4)) / _w)
      return _x
    }

    getY = (index) => {
      const _w = this._w
      const _y = (~~(index / 4)) % _w
      return _y
    }

    getAph = (x, y) => {
      return 255
    }

    getR = (x, y) => {
      return 0
    }
    getG = (x, y) => {
      return 0
    }
    getB = (x, y) => {
      return 0
    }

    paint () {
      const _w = this._w
      const imgData = new ImageData(_w, _w)

      for (let i = 0; i < imgData.data.length; i += 4) {
        const x = this.getX(i)
        const y = this.getY(i)

        imgData.data[i + 0] = this.getR(x, y)
        imgData.data[i + 1] = this.getG(x, y)
        imgData.data[i + 2] = this.getB(x, y)
        imgData.data[i + 3] = this.getAph(x, y)
      }

      return imgData
    }
}
