export function throttle(func, wait) {
  let preTime = 0
  return function() {
    let nowTime = +new Date()
    let args = arguments
    if(nowTime - preTime > wait) {
      func.apply(this, args)
      preTime = nowTime
    }
  }
}