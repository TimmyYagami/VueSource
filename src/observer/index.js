import {isObject} from "../utils/index";
import {arrayMethods} from './array.js'

function defineReactive(data, key, value) {
  observer(value)
  Object.defineProperty(data, key, {
    configurable: true,
    enumerable: false,
    get() {
      return value
    },
    set(newVal) {
      if (newVal === value) return
      '劫持了，做操作！'
      value = newVal
    }
  })
}

class Observer {
  constructor(data) {
    if (Array.isArray(data)) {
      data.forEach((item, i) => {
        defineReactive(data,i,item)
      })
    } else {
      this.walk(data)
    }
  }


  walk(data) {
    for (let k in data) {
      defineReactive(data, k, data[k])
    }
  }
}

export function observer(data) {

  if (!isObject(data)) return
  return new Observer(data)
}
