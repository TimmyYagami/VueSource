import {observer} from './observer/index'

export function initState(vm) {
  const ops = vm.$options

  if (ops.data) {
    initData(vm)
  }
}

function initData(vm) {
  let data = vm.$options.data;
  data = typeof data === 'function' ? data() : data
  vm._ob = data
  observer(data)
}
