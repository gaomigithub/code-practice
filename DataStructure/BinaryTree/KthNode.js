// 给定一棵二叉搜索树，请找出其中的第k小的结点。
//      例如， （5，3，7，2，4，6，8） 中，按结点数值大小顺序第三小结点的值为4。

// 【二叉搜索树】
// 二叉搜索树是特殊的二叉树，考察二叉搜索树的题目一般都是考察二叉搜索树的特性，所以掌握好它的特性很重要。

// 若任意节点的【左子树】不不空，则左子树上所有结点的值均【小】于它的 根结点的值;
// 若任意节点的【右子树】不不空，则右子树上所有结点的值均【大】于它的 根结点的值;
// 任意节点的左、右子树也分别为二叉查找树。

// recursion
function recursion(root, k) {
  const arr = []
  loopThrough(root, arr)
  if (k > 0 && k <= arr.length) {
    return arr[k - 1]
  }
  return null
}

function loopThrough(node, arr) {
  if (node) {
    loopThrough(node.left, arr)
    arr.push(node)
    loopThrough(node.right, arr)
  }
}

// iteration
function iteration(root, k) {
  const arr = []
  const stack = []
  let curr = root
  while (stack.length > 0 || curr) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    arr.push(curr)
    curr = curr.right
  }
  if (k > 0 && k <= arr.length) {
    return arr[k - 1]
  }
  return null
}
