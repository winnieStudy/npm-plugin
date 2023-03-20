// 深度冻结
export const deepFreeze = (obj) => {
  const allProps = Object.getOwnPropertyNames(obj)
  // 同上：var allProps = Object.keys(obj);
  allProps.forEach(item => {
   if (typeof obj[item] === 'object' && obj[item] !== null) {
    deepFreeze(obj[item])
   }
  })
  return Object.freeze(obj)
 }