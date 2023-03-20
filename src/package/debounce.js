export function debounce(fn, delay, immediate) {
  let timer = null
  return function() {
    let args = arguments
    if(!timer && immediate) fn.apply(this, args)
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      if(!immediate) fn.apply(this, args)
    }, delay)
  }
}