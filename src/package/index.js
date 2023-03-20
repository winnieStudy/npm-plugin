import pigButton from './pig-button/index.vue'   //引入组件
import { FormatDate } from './dataFormat'  //格式化日期
import {Thousand} from './thousand'
import {isValidIP} from './isValidIP'  //校验ip
import {isValidPhone} from './isValidPhone'  //校验手机号
import {debounce} from './debounce'  //防抖
import {throttle} from './throttle'  //节流
import {deepFreeze} from './deepFreeze'

const coms = [pigButton]   //将来如果有其他组件是可以写到这个数组中的

//批量组件注册
const install = function(Vue) {
  coms.forEach(com => {
    Vue.component(com.name, com)
  })
}
export default {
  install,
  FormatDate,
  Thousand,
  isValidIP,
  debounce,
  throttle,
  isValidPhone,
  deepFreeze
}