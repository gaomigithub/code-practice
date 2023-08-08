function PromiseAllSettled(promiseArr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArr)) {
      reject(new TypeError('arguments must be an array'))
    }

    const promiseLen = promiseArr.length
    const res = []
    let count = 0
    for (let i = 0; i < promiseLen; i++) {
      Promise.resolve(promiseArr[i])
        .then((value) => {
          res[i] = {
            status: 'fulfilled',
            value,
          }
        })
        .catch((reason) => {
          res[i] = {
            status: 'rejected',
            reason,
          }
        })
        .finally(() => {
          count++
          if (count == promiseLen) {
            resolve(res)
          }
        })
    }
  })
}

// test example
const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo')
)
const promises = [promise1, promise2]

const proAllSettled = PromiseAllSettled(promises)
  .then((res) => {
    console.log('promise.all-执行结果', res)
  })
  .catch((e) => {
    console.log(e)
  })
