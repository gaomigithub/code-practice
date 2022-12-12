class stackArray {
  //构造函数，初始化栈，采用对象的方式存储，
  //也可以采用数组的方式储存，就可以使用数组的API来改写
  //push和pop都可以拿来用的
  //注意：这里top初始化为0
  constructor() {
    this._stackArray = []
    this._top = -1
  }
  isEmpty() {
    if (this._top == -1) return true
    return false
  }
  push(elem) {
    this._top++
    this._stackArray[this._top] = elem
  }
  pop() {
    if (this.isEmpty()) return undefined
    delete this._stackArray[this._top--]
  }
  peek() {
    console.log(this._stackArray)
    return this._stackArray[this._top]
  }
  toString = () => {
    let str = ''
    for (const el in this.items) {
      str += el + ' ' // 暂时不考虑格式，更应该关注数据结构的实现
    }
    return str
  }
  join() {
    return this._stackArray.toString().replace(/,/g, '')
  }
}
let stack = new stackArray()
stack.push(1)
console.log(stack.peek())
stack.push(2)
console.log(stack.peek())
stack.pop()
console.log(stack.peek())
stack.push(3)
console.log(stack)
const _string = stack.join()
console.log({ _string })
