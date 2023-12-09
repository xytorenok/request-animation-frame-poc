const a = {
  element: document.getElementById('a'),
  w: 50,
  h: 50,
  x: 200,
  y: 25,
  v: 0.2,
}
const b = {
  element: document.getElementById('b'),
  w: 50,
  h: 50,
  x: 25,
  y: 300,
  v: 0.09,
}

const target = { x: 0, y: 0 }

onmousemove = e => {
  target.x = e.x
  target.y = e.y
}


requestAnimationFrame(makeAnimation(a))
requestAnimationFrame(makeAnimation(b))

function makeAnimation(obj) {
  let before = performance.now()

  return function animate(now) {
    const delta = now - before
    const {x, y} = target
    const { dx, dy } = calcDiff(obj.x, obj.y, x, y, delta * obj.v)

    obj.x += dx
    obj.y += dy

    // obj.y += (innerHeight - obj.y - obj.h) / 100

    obj.element.style.width = obj.w + 'px'
    obj.element.style.height = obj.h + 'px'
    obj.element.style.left = obj.x - obj.w / 2 + 'px'
    obj.element.style.top = obj.y - obj.h / 2 + 'px'

    before = now
    requestAnimationFrame(animate)
  }
}

function calcDiff(x1, y1, x2, y2, d) {
  const distance = Math.hypot(x2 - x1, y2 - y1);

  if (d >= distance) {
    const dx = x2 - x1
    const dy = y2 - y1

    return { dx, dy };
  }

  const dx = (x2 - x1) * (d / distance);
  const dy = (y2 - y1) * (d / distance);

  return { dx, dy };
}
