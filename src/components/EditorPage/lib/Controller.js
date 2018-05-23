const random = (min = 1, max = 10) => min + Math.floor(Math.random() * Math.floor(max))

function update (activeAnchor) {
  const group = activeAnchor.getParent()

  const topLeft = group.get('.topLeft')[0]
  const topRight = group.get('.topRight')[0]
  const bottomRight = group.get('.bottomRight')[0]
  const bottomLeft = group.get('.bottomLeft')[0]
  const image = group.get('Image')[0]

  const anchorX = activeAnchor.getX()
  const anchorY = activeAnchor.getY()

  // update anchor positions
  switch (activeAnchor.getName()) {
    case 'topLeft':
      topRight.setY(anchorY)
      bottomLeft.setX(anchorX)
      break
    case 'topRight':
      topLeft.setY(anchorY)
      bottomRight.setX(anchorX)
      break
    case 'bottomRight':
      bottomLeft.setY(anchorY)
      topRight.setX(anchorX)
      break
    case 'bottomLeft':
      bottomRight.setY(anchorY)
      topLeft.setX(anchorX)
      break
  }

  image.position(topLeft.position())

  var width = topRight.getX() - topLeft.getX()
  var height = bottomLeft.getY() - topLeft.getY()
  if (width && height) {
    image.width(width)
    image.height(height)
  }
}
function addAnchor (group, x, y, name) {
//   var stage = group.getStage()
  var layer = group.getLayer()

  var anchor = new Konva.Circle({
    x: x,
    y: y,
    stroke: '#666',
    fill: '#ddd',
    strokeWidth: 2,
    radius: 8,
    name: name,
    draggable: true,
    dragOnTop: false
  })

  anchor.on('dragmove', function () {
    update(this)
    layer.draw()
  })
  anchor.on('mousedown touchstart', function () {
    group.setDraggable(false)
    this.moveToTop()
  })
  anchor.on('dragend', function () {
    group.setDraggable(true)
    layer.draw()
  })
  // add hover styling
  anchor.on('mouseover', function () {
    var layer = this.getLayer()
    document.body.style.cursor = 'pointer'
    this.setStrokeWidth(4)
    layer.draw()
  })
  anchor.on('mouseout', function () {
    var layer = this.getLayer()
    document.body.style.cursor = 'default'
    this.setStrokeWidth(2)
    layer.draw()
  })

  group.add(anchor)
}

const createkImgGroup = (layer, info = {}) => {
  const {w = 200, h = 137, x, y} = info
  const kImg = new Konva.Image({
    width: w,
    height: h
  })
  const kGroup = new Konva.Group({
    x: x || random(1, 300),
    y: y || random(1, 300),
    draggable: true
  })
  layer.add(kGroup)
  kGroup.add(kImg)
  addAnchor(kGroup, 0, 0, 'topLeft')
  addAnchor(kGroup, w, 0, 'topRight')
  addAnchor(kGroup, w, h + 1, 'bottomRight')
  addAnchor(kGroup, 0, h + 1, 'bottomLeft')

  return kImg
}

export default class Controller {
  constructor (targetElement, width, height) {
    console.log(' ------ controller -----')
    this.targetElement = targetElement
    this.width = width
    this.height = height
    this.initLayer()

    const urls = [
      'https://cdn.psychologytoday.com/sites/default/files/styles/essentials_thumb/public/field_blog_entry_teaser_image/2018-05/woman-walking-away-144x144-0_0-1271_1271.jpg?itok=uBRnp_3Q',
      'https://cdn.psychologytoday.com/sites/default/files/styles/profile_bottom/public/field_user_blogger_photo/bella_depaulo_.jpg?itok=gmF8H8jl'
    ]

    for (let url of urls) {
      this.createImgGroup(url)
    }
  }
  initLayer () {
    const stage = new Konva.Stage({
      container: this.targetElement,
      width: this.width,
      height: this.height
    })
    const layer = new Konva.Layer()
    stage.add(layer)

    this.layer = layer
  }
  createImgGroup (url = '') {
    const layer = this.layer
    const kImgObj = createkImgGroup(layer)
    const imgObj = new Image()
    imgObj.src = url
    imgObj.onload = function () {
      kImgObj.image(imgObj)
      layer.draw()
    }
  }
}
