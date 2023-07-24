const quickSort = (arr, left, right) => {
  if (arr.length <= 1) return
  if (left >= right) return
  let p = arr[left]
  let i = left
  let j = right
  while (i != j) {
    while (arr[j] >= p && i < j) {
      j--
    }
    while (arr[i] <= p && i < j) {
      i++
    }
    if (i < j) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
  arr[left] = arr[i]
  arr[i] = p
  quickSort(arr, left, i - 1)
  quickSort(arr, i + 1, right)
}
const arr = [6, 1, 2, 7, 10, 9, 3, 4, 5, 10, 8, 3, 3, 6, 1, 9, 10, 7, 6]
// quickSort(arr, 0, arr.length - 1)
// console.log(arr)

/**
 * 快速排序(非递归)
 * @param num 待排序数组
 * @param left 左指针
 * @param right 右指针
 */
function _quickSort(num, left, right) {
  const list = [[left, right]] // 将[left,right]存入数组中，类似于递归入栈
  while (list.length > 0) {
    // 若list不为空，循环弹出list最后一个数组进行快排
    const now = list.pop() // 弹出list末尾。(也可用list.shift()取出list第一个数组，但在数据量较大时，这种方式效率较低)
    if (now[0] >= now[1]) {
      // 若左右指针相遇，待排序数组长度小宇1，则无需进行快排(注意不能写成now[0]==now[1]，这里now[0]是有可能大于now[1]的
      continue
    }
    let i = now[0],
      j = now[1],
      flag = now[0] // 以下与递归方法相同，请参考上面的递归详解

    console.log({ i, j, flag })

    while (i < j) {
      // 在i<j时不断循环，i一旦与j碰头，则跳出循环。
      while (num[j] >= num[flag] && j > flag) j-- // j不断左移，找到在num[flag]右侧且比它大的数。
      if (i >= j) {
        break // 由于j可能已被改变，需再次判断i与j是否碰头。
      }
      while (num[i] <= num[flag] && i < j) i++ // i不断右移，找到且比基数小的数，且i不能与j碰头。(由于两次交换已合并，此处不需要使得i在flag左侧)
      // num[flag] num[j] num[i]三者换位，可用ES6语法糖[num[flag],num[j],num[i]] = [num[j],num[i],num[flag]];
      let temp = num[flag]
      num[flag] = num[j]
      num[j] = num[i]
      num[i] = temp
      flag = i // 基数已经在原num[i]的位置，flag同时也要赋值成i。
    }
    list.push([now[0], flag - 1]) // 将flag左边数组作为待排序数组，只需将左右指针放入list即可。
    list.push([flag + 1, now[1]]) // 将flag右边数组作为待排序数组，只需将左右指针放入list即可。
    console.log({ list, num })
  }
}

// _quickSort(arr, 0, arr.length - 1)
// console.log(arr)

function q(num, l, r) {
  const list = [[l, r]]
  while (list.length > 0) {
    const now = list.pop()

    if (now[0] >= now[1]) {
      // 若左右指针相遇，待排序数组长度小宇1，则无需进行快排(注意不能写成now[0]==now[1]，这里now[0]是有可能大于now[1]的
      continue
    }
    let i = now[0],
      j = now[1],
      flag = now[0] // 以下与递归方法相同，请参考上面的递归详解

    while (i < j) {
      while (num[j] >= num[flag] && j > flag) {
        j--
      }
      if (i >= j) {
        break
      }
      while (num[i] <= num[flag] && i < j) {
        i++
      }
      ;[num[flag], num[j], num[i]] = [num[j], num[i], num[flag]]
      flag = i
    }
    list.push([now[0], flag - 1]) // 将flag左边数组作为待排序数组，只需将左右指针放入list即可。
    list.push([flag + 1, now[1]]) // 将flag右边数组作为待排序数组，只需将左右指针放入list即可。
    console.log({ list, num })
  }
}

q(arr, 0, arr.length - 1)
console.log(arr)
