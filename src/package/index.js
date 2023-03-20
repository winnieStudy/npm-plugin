import pigButton from './pig-button/index.vue'   //引入组件
import { FormatDate } from './dataFormat'
import {Thousand} from './thousand'
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
  Thousand
}