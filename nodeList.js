// 数组的缺点：从数组的起点或中间插入数据，成本是很高的，因为需要移动元素
// 链表储存有序的元素集合。每个元素由一个储存元素本身的节点和下一个指向下一个元素的引用（也称为指针或链接）。
class Node {
  constructor(element) {
    this.element = element
    this.next = undefined
  }
}
class LinkedList {
  constructor() {
    this.count = 0
    this.head = undefined
  }
  //向链表尾部添加元素
  push(element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
  isEmpty() {
    return this.head == null
  }
  //输出链表大小
  size() {
    return this.count
  }
  //输出内容字符串
  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size(); i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
  //移除指定元素
  remove(index) {
    if (index > 0 && index < this.count) {
      let current = this.head
      if (index == 0) {
        this.head = current.next
      } else {
        let previous
        for (let i = 0; i < index; i++) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
  //辅助函数，获取函数（节点）
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }
  //插入
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }
}
let p = new LinkedList()
p.push(1)
p.push(2)
console.log(p.toString())
p.remove(1)
console.log(p.toString())
p.insert(2, 1)
console.log(p.toString())
console.log(p.isEmpty())
