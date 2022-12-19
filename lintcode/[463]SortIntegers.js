/**
 * Given an integer array, sort it in ascending order. Use selection sort, bubble sort, insertion sort or any O(n2) algorithm.
 * 
 * !!Please modify the array A in place, this question does not require a return value.
 * 
 * Example 1:
	Input:  [3, 2, 1, 4, 5]
	Output: [1, 2, 3, 4, 5]
	
	Explanation: 
	return the sorted array.

 * Example 2:
	Input:  [1, 1, 2, 1, 1]
	Output: [1, 1, 1, 1, 2]
	
	Explanation: 
	return the sorted array.
 */

// Mark-非常棒的逻辑讲解: https://blog.csdn.net/weixin_46224014/article/details/121231814

const arr = [5, 4, 3, 2, 1]
Array.prototype.insertionSort = function () {
  //从第二个数开始往前比
  for (let i = 1; i < this.length; ++i) {
    //先把值保存起来
    const temp = this[i]
    let j = i
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1]
      } else {
        //因为已经是排序过的了，如果比上一位大，那就没必要再跟上上位比较了
        break
      }
      j -= 1
    }
    //这里的j有可能是第0位，也有可能是到了一半停止了
    this[j] = temp
  }
}

arr.insertionSort()

Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i += 1) {
    //通过 this.length 次把第一位放到最后,完成排序
    //-i是因为最后的位置是会动态改变的，当完成一次后,最后一位会变成倒数第二位
    for (let j = 0; j < this.length - 1 - i; j += 1) {
      if (this[j] > this[j + 1]) {
        const temp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = temp
      }
    }
  }
}

arr.bubbleSort()

Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    let minIdx = i
    for (let j = i; j < this.length; j++) {
      if (this[j] < this[minIdx]) {
        minIdx = j
      }
    }

    if (minIdx !== i) {
      const temp = this[i]
      this[i] = this[minIdx]
      this[minIdx] = temp
    }
  }
}

arr.selectionSort()

Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    if (arr.length === (1 || 0)) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)

    const arrL = rec(left)
    const arrR = rec(right)
    const _res = []
    while (arrL.length !== 0 || arrR.length !== 0) {
      if (arrL.length !== 0 && arrR.length !== 0) {
        _res.push(arrL[0] < arrR[0] ? arrL.shift() : arrR.shift())
      } else if (arrL.length !== 0) {
        _res.push(arrL.shift())
      } else if (arrR.length !== 0) {
        _res.push(arrR.shift())
      }
    }

    return _res
  }
  const res = rec(this)
  res.forEach((v, i) => (this[i] = v))
}

arr.mergeSort()

Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length === (0 || 1)) {
      return arr
    }

    const mid = arr[0]
    const left = []
    const right = []

    for (let i = 1; i < this.length; ++i) {
      if (arr[i] < mid) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...rec(left), mid, ...rec(right)]
  }
  const res = rec(this)
  res.forEach((v, i) => (this[i] = v))
}

arr.quickSort()

export class SortIntegers {
  /**
   * @param a: an integer array
   * @return: nothing
   */
  bubbleSort(a) {
    // bubble 142ms 12.50MB
    // 1. 比较所有相邻元素,如果第一个比第二个大，则交换它们
    // 2. 一轮下来保证可以找到一个数是最大的
    // 3. 执行n-1轮，就可以完成排序
    for (let i = 0; i < a.length - 1; i++) {
      //通过 this.length 次把第一位放到最后,完成排序
      //-i是因为最后的位置是会动态改变的，当完成一次后,最后一位会变成倒数第二位
      for (let j = 0; j < a.length - 1 - i; j++) {
        if (a[j] > a[j + 1]) {
          const temp = a[j]
          a[j] = a[j + 1]
          a[j + 1] = temp
        }
      }
    }
  }
  selectionSort(a) {
    // selectionSort 184ms 20.51MB
    // 1. 找到数组中的最小值，选中它并将其放置在第一位
    // 2. 接着找到第二个最小值，选中它并将其放置到第二位
    // 3. 执行n-1轮，就可以完成排序
    for (let i = 0; i < a.length - 1; i++) {
      let minIdx = i
      //遍历剩余长度找到最小下标
      for (let j = i; j < a.length; j++) {
        if (a[j] < a[minIdx]) {
          minIdx = j
        }
      }
      if (minIdx !== i) {
        //交换当前下标i与最小下标的值，重复this.length次
        const temp = a[i]
        a[i] = a[minIdx]
        a[minIdx] = temp
      }
    }
  }
  insertionSort(a) {
    // insertionSort 392ms 42.73MB
    // 1. 从第二个数开始往前比
    // 2. 比它大就往后排
    // 3. 以此类推进行到最后一个数

    //从第二个数开始往前比
    for (let i = 1; i < a.length; i++) {
      const temp = a[i]
      let j = i
      while (j > 0) {
        if (a[j - 1] > temp) {
          a[j] = a[j - 1]
        } else {
          //因为已经是排序过的了，如果比上一位大，那就没必要再跟上上位比较了
          break
        }
        j--
      }
      //这里的j有可能是第0位，也有可能是到了一半停止了
      a[j] = temp
    }
  }
  mergeSort(a) {
    // mergeSort 327ms 43.30MB
    // 分: 把数组劈成两半，再递归地对数组进行“分”操作，直到分成一个个单独的数
    // 合：把两个数合并为有序数组，再对有序数组进行合并，直到全部子数组合并为一个完整数组
    const rec = (arr) => {
      // 如果数组长度为1，说明切完了，可以直接返回
      if (arr.length === 1) {
        return arr
      }
      // 切分数组，把每一项都单独切出来
      const mid = Math.floor(arr.length / 2)
      const left = arr.slice(0, mid)
      const right = arr.slice(mid, arr.length)
      // 有序的L/R边数组
      const sortLeft = rec(left)
      const sortRight = rec(right)

      const res = []
      // 把左右两个有序的合并为一个有序的返回
      while (sortLeft.length || sortRight.length) {
        if (sortLeft.length && sortRight.length) {
          res.push(
            sortLeft[0] < sortRight[0] ? sortLeft.shift() : sortRight.shift()
          )
        } else if (sortLeft.length) {
          res.push(sortLeft.shift())
        } else if (sortRight.length) {
          res.push(sortRight.shift())
        }
      }
      return res
    }

    const res = rec(a)
    res.forEach((val, idx) => (a[idx] = val))
  }
  quickSort(a) {
    // quickSort 122ms 13.19MB
    // 分区: 从数组中任意选择一个基准，所有比基准小的元素放到基准前面，比基准大的元素放到基准的后面
    // 递归：递归地对基准前后的子数组进行分区
    const rec = (arr) => {
      if (arr.length <= 1) {
        return arr
      }
      const left = []
      const right = []
      //以第一个元素作为基准值
      const mid = arr[0]
      //小于基准值的放左边，大于基准值的放右边
      for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < mid) {
          left.push(arr[i])
        } else {
          right.push(arr[i])
        }
      }
      return [...rec(left), mid, ...rec(right)]
    }

    const res = rec(a)
    res.forEach((val, idx) => (a[idx] = val))
  }

  /**
   * 快速排序(非递归)
   * @param num 待排序数组
   * @param left 左指针
   * @param right 右指针
   */
  _quickSort(num, left, right) {
    var list = [[left, right]] // 将[left,right]存入数组中，类似于递归入栈
    while (list.length > 0) {
      // 若list不为空，循环弹出list最后一个数组进行快排
      var now = list.pop() // 弹出list末尾。(也可用list.shift()取出list第一个数组，但在数据量较大时，这种方式效率较低)
      if (now[0] >= now[1]) {
        // 若左右指针相遇，待排序数组长度小宇1，则无需进行快排(注意不能写成now[0]==now[1]，这里now[0]是有可能大于now[1]的
        continue
      }
      var i = now[0],
        j = now[1],
        flag = now[0] // 以下与递归方法相同，请参考上面的递归详解
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
    }
  }
}
