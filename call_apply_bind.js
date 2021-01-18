Function.prototype.myCall = function (val, ...args) {
  if (typeof val !== 'object') {
    val = new Object(val)
  }
  let context = this
  val.fn = context
  val.fn(...args)
  delete val.fn
}

function fn(...args) {
  console.log(...args, this)
}

fn.myCall(1, 2, 3, 4, 5, 6)
fn.apply = function () {

}

// Function.prototype.myBind = function (val, ...args) {
//   if (typeof val !== 'object') {
//     val = new Object(val)
//   }
//   let context = this
//   val.fn = context
//   return function (...values) {
//     val.fn(...args, ...values)
//   }
// }
// function fn(...args) {
//   console.log(this,...args)
// }
// let a=fn.bind(1,2,3,4)
// a(5)
