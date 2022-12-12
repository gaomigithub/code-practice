export class stackArray {
  //构造函数，初始化栈，采用对象的方式存储，
  //也可以采用数组的方式储存，就可以使用数组的API来改写
  //push和pop都可以拿来用的
  //注意：这里top初始化为0
  constructor() {
    this._stackArray = {}
    this._top = -1
  }
  isEmpty() {
    if (this._top == -1) return true
    return false
  }
  push(elem) {
    this._top++
    this.stackArray[this._top] = elem
  }
  pop() {
    if (this.isEmpty()) return undefined
    delete this.stackArray[this._top--]
  }
  peek() {
    console.log(this._stackArray)
    return this.stackArray[this._top]
  }
}
let stack = new stackArray()
stack.push(1)
console.log(stack.peek())
stack.push(2)
console.log(stack.peek())
stack.pop()
console.log(stack.peek())
