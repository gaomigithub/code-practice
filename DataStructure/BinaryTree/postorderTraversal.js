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

// 非递归实现，前序遍历是根左右，后序为左右根，将前序实现为根右左，再将数组反转即得后序遍历，左右根
const iteration = function (root) {
  if (!root) return []
  const res = []
  const stack = [root]
  while (stack.length) {
    let temp = stack.pop()
    if (temp.left) stack.push(temp.left) //  前序根左右调换为，根右左
    if (temp.right) stack.push(temp.right)
    res.push(temp.val)
  }
  return res.reverse() //  将结果反转即为后序
}

const _iteration = (root) => {
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
