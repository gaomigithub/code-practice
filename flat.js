// 这个函数首先检查深度，如果深度小于 1，就使用 slice 返回一个数组的副本。
// 然后使用 reduce 和 concat，如果元素是数组，递归调用 flat 函数；如果不是，直接添加进新数组。
function flat(arr, depth = 1) {
  if (depth < 1) return arr.slice()
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flat(val, depth - 1) : val)
  }, [])
}

// 这个函数只能展开所有层级的数组，因为没有提供深度控制。如果元素是数组，递归调用 flat 函数直到全都是非数组元素。
function flatByReduce(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flat(val) : val)
  }, [])
}
