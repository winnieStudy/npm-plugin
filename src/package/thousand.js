export function Thousand(str) {
  let newStr = str.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return newStr
}