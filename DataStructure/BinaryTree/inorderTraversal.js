// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
// 输出: [1,3,2]

const recursion = (root, arr = []) => {
  if (root) {
    recursion(root.left, arr)
    arr.push(root.val)
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
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    res.push(curr.val)
    curr = curr.right
  }
  return res
}

const solu = (root) => {
  const res = []
  const stack = []
  let curr = root
  while (stack.length > 0 || curr) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    res.push(stack.pop().val)
    curr = curr.right
  }
  return res
}

const _iteration = (root) => {
  const res = []
  const stack = []

  while (stack.length > 0 || root) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    let temp = stack.pop()
    res.push(temp.val)
    root = temp.right
  }

  return res
}
