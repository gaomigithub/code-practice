// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
// 输出: [3,2,1]

const recursion = (root, arr = []) => {
  if (root) {
    recursion(root.left, arr)
    recursion(root.right, arr)
    arr.push(root.val)
  }
  return arr
}

const iteration = (root) => {
  const res = []
  const stack = []
  let last = null // 标记上一个访问的节点
  let curr = root
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack[stack.length - 1]
    if (!curr.right || curr.right === last) {
      curr = stack.pop()
      res.push(curr.val)
      last = curr
      curr = null // 继续弹栈
    } else {
      curr = curr.right
    }
  }
  return res
}
