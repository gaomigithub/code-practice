export class Unique {
  // 利用Map哈希表特性
  byMap(arr) {
    const res = new Map()
    return arr.filter((item) => !res.has(item) && res.set(item, 1))
  }

  // 利用ES6: filter
  byFilter2(arr) {
    return arr.filter(function (item, index) {
      return arr.indexOf(item) === index // indexOf只能查找到第一个
    })
  }

  // 利用includes实现数组去重
  byIncludes(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i])
      }
    }
    return newArr
  }

  // Set结构不能接收重复数据
  bySet(arr) {
    const res = [...new Set(arr)]
    return res
  }
}
