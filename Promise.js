function myPromose(fn) {
  this.status = 'pending'
  this.val = null

  let resolve = (val) => {
    if (this.status !== 'pending') return
    this.status = 'fulfilled'
    this.val = val
    console.log(val);
  }

  let reject = (err) => {
    if (this.status !== 'pending') return
    this.status = 'rejected'
    this.val = err
    console.log(err);
  }

  fn(resolve, reject)
}

myPromose.prototype.then = function (fn) {
  fn(this.val)
}

let a = new myPromose(function (resolve, reject) {
  setTimeout(()=>{
    resolve('成功了')
  })
  reject('失败了')
})

a.then(res => {
  console.log(123, res);
})
