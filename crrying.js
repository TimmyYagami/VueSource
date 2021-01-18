function deepClone(val) {
  if (typeof val !== 'object' || val === null) {
    return val
  }
  let newval
  if (Object.prototype.toString.call(val) === '[object Array]') {
    newval = []
    val.forEach(item => {
      if (typeof item !== 'object' || item === null) {
        newval.push(item)
      } else {
        let newItem = deepClone(item)
        newval.push(newItem)
      }
    })
  } else {
    newval = {}
    for (let k in val) {
      if (typeof val[k] !== 'object' || val[k] === null) {
        newval[k] = val[k]
      } else {
        let newItem = deepClone(val[k])
        newval[k] = newItem
      }
    }
  }

  return newval
}

let a = [1, 2, [2], {a: 1, b: [1]}]
let b = deepClone(a)
let c = a
console.log(a === b, a === c, b);
