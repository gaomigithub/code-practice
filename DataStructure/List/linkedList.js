class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  // 添加元素的方法
  add(data) {
    const newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.size++
  }

  // 打印元素的方法
  print() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}

const linkedList = new LinkedList()
linkedList.add('Node 1')
linkedList.add('Node 2')
linkedList.add('Node 3')
linkedList.print() // 输出: Node 1  Node 2  Node 3
