// 操作给定的二叉树，将其变换为源二叉树的镜像。

//        源二叉树
//     	    8
//     	   /  \
//     	  6   10
//     	 / \  / \
//     	5  7 9 11
//     	镜像二叉树
//     	    8
//     	   /  \
//     	  10   6
//     	 / \  / \
//     	11 9 7  5

// 解题思路
// 递归交换二叉树所有节点左右节点的位置。

function mirror(root) {
  if (root) {
    const temp = root.right
    root.right = root.left
    root.left = temp
    mirror(root.right)
    mirror(root.left)
  }
}
