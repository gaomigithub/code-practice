class Queue {
  constructor() {
    this.conut = 0
    this.lowestCount = 0
    this.items = {}
  }
  enqueue(elem) {
    this.items[this.conut] = elem
    this.conut++
  }
  isEmpty() {
    return this.conut === this.lowestCount
  }
  peek() {
    return this.items[this.lowestCount]
  }
  dequeue() {
    if (this.isEmpty) {
      return undefined
    } else {
      delete this.items[this.lowestCount]
    }
  }
  clear() {
    this.items = {}
    this.conut = 0
    this.lowestCount = 0
  }
  //这里的toString写的，得出的字符串不是很好看，这里就图个方便了
  toString() {
    if (this.isEmpty()) return ''
    let obj = ''
    for (let i = this.lowestCount; i < this.conut; i++) {
      obj += this.items[i]
    }
    return obj
  }
}
let a = new Queue()
a.enqueue(1)
a.enqueue(2)
console.log(a.toString())
console.log(a.isEmpty())
