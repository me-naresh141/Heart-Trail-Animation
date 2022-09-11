let body = document.querySelector('body')

body.addEventListener('mousemove', (e) => {
  let elmX = e.offsetX
  let elmY = e.offsetY
  let span = document.createElement('span')
  span.style.left = elmX + 'px'
  span.style.top = elmY + 'px'
  let size = Math.random() * 100
  span.style.width = size + 'px'
  span.style.height = size + 'px'
  body.append(span)
  setTimeout(() => {
    span.remove()
  }, 3000)
  //   console.log(body)
})
