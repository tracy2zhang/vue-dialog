export function createElement (tag = 'div') {
  const el = document.createElement(tag)
  document.body.appendChild(el)
  return el
}

export function extend (target, source) {
  for (let key in source) {
    target[key] = source[key]
  }
  return target
}
