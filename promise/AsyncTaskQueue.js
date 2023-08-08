// 写一个异步任务队列，可以指定同时指定的队列长度
class AsyncTaskQueue {
  constructor(concurrency) {
    this.concurrency = concurrency // 并行任务数量上限
    this.running = 0 // 当前正在运行的任务数量
    this.queue = [] // 任务队列
  }

  pushTask(task) {
    // 添加新的任务
    this.queue.push(task)
    this.next()
  }

  next() {
    while (this.running < this.concurrency && this.queue.length) {
      this.running++
      let task = this.queue.shift()
      task()
        .then(this.completeTask.bind(this))
        .catch(this.completeTask.bind(this))
    }
  }

  completeTask() {
    // 任务完成后调用
    this.running--
    this.next()
  }
}

// 使用示例
let queue = new AsyncTaskQueue(3) // 同时最多运行 3 个任务

// 将一些异步任务添加至队列
Array.from({ length: 10 }, (_, i) => i).forEach((i) => {
  queue.pushTask(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          console.log(i)
          resolve()
        }, 1000 * Math.random())
      })
  )
})
