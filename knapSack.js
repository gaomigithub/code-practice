// 动态规划: 背包问题
// https://blog.csdn.net/wulong710/article/details/128753031?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-3-128753031-blog-108352436.pc_relevant_3mothn_strategy_recovery&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-3-128753031-blog-108352436.pc_relevant_3mothn_strategy_recovery&utm_relevant_index=6

// pseudocode:
// if(j < w[i]){ //容量小于重量，hold不住
// 	T[i][j] = T[i-1][j]; //所以值等于上一行，同一列。如果i=0,没有上一行，则T[i][j] 取0
// }else{
// 	T[i][j] = max(val[i] + T[i-1][j-w[i]] , T[i-1][j]);  //参照上面 i=2 j=4 和 i=2 j=5 时的填表分析
// }

function doDynamic(values, weights, capacity) {
  let row = values.length
  let arr = []

  for (let i = 0; i < row; i++) {
    arr[i] = []
    for (let j = 0; j <= capacity; j++) {
      if (j === 0) {
        arr[i][j] = 0
      } else {
        if (j < weights[i]) {
          if (i === 0) {
            arr[i][j] = 0
          } else {
            arr[i][j] = arr[i - 1][j]
          }
        } else {
          if (i === 0) {
            arr[i][j] = values[i]
          } else {
            arr[i][j] = Math.max(
              values[i] + arr[i - 1][j - weights[i]],
              arr[i - 1][j]
            )
          }
        }
      }
    }
  }
  return arr
}

let values = [3, 4, 5]
let weights = [2, 3, 4]
let capacity = 5
let arr = doDynamic(values, weights, capacity)
console.log('v', 'w', JSON.stringify([0, 1, 2, 3, 4, 5]))
arr.forEach((v, i) => {
  console.log(values[i], weights[i], JSON.stringify(v))
})
