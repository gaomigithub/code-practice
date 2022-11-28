// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
// 输出: [1,2,3]

const recursion = (root, arr = []) => {
  if (root) {
    arr.push(root.val)
    recursion(root.left, arr)
    recursion(root.right, arr)
  }
  return arr
}

const rec = (root, arr = []) => {
  if (root) {
    arr.push(root.val)
    rec(root.left, arr)
    rec(root.right, arr)
  }
  return arr
}

const iteration = (root) => {
  if (!root) return []
  const res = []
  const stack = [root]
  while (stack.length) {
    let temp = stack.pop()
    res.push(temp.val)
    if (temp.right) stack.push(temp.right) //  因为栈先进后出所以将right放前
    if (temp.left) stack.push(temp.left)
  }
  return res
}

const _iteration = (root) => {
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
