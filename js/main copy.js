const a = {
  element: document.getElementById('a'),
  w: 50,
  h: 50,
  x: 200,
  y: 0,
}
const b = {
  element: document.getElementById('b'),
  w: 50,
  h: 50,
  x: 0,
  y: 300,
}


requestAnimationFrame(makeAnimation(a))
requestAnimationFrame(makeAnimation(b))

function makeAnimation(obj) {
  return function animate() {
    obj.x += (innerWidth - obj.x - obj.w) / 100
    obj.y += (innerHeight - obj.y - obj.h) / 100

    obj.element.style.width = obj.w + 'px'
    obj.element.style.height = obj.h + 'px'
    obj.element.style.left = obj.x + 'px'
    obj.element.style.top = obj.y + 'px'

    requestAnimationFrame(animate)
  }
}