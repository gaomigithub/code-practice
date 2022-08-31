// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
// 输出: [1,2,3]

const recursion = (root) => {
  const arr = []

  if (root) {
    arr.push(root.val)
    recursion(root.left, arr)
    recursion(root.right, arr)
  }
  return arr
}

const iteration = (root) => {
  const res = []
  const stack = []
  let curr = root
  while (curr || stack.length > 0) {
    while (curr) {
      res.push(curr.val)
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    curr = curr.right
  }
  return res
}
