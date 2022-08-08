/**
 * 776 · Strobogrammatic Number II
 * 
 * A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
 * Find all strobogrammatic numbers that are of length = n.
 * 
 * Example 1:

    Input: n = 2, 
    Output: ["11","69","88","96"]

 * Example 2:

    Input: n = 1, 
    Output: ["0","1","8"]
 *
 */

// Hint: https://www.cnblogs.com/grandyang/p/5200919.html

export class FindStrobogrammatic {
  /**
   * @param n: the length of strobogrammatic number
   * @return: All strobogrammatic numbers
   *          we will sort your return value in output
   */
  recurse(n) {
    const helper = (n, m) => {
      if (n === 0) return ['']
      if (n === 1) return ['0', '1', '8']
      let list = helper(n - 2, m)
      let res = []
      for (let i = 0; i < list.length; i++) {
        let s = list[i]
        if (n != m) res.push('0' + s + '0')
        res.push('1' + s + '1')
        res.push('6' + s + '9')
        res.push('8' + s + '8')
        res.push('9' + s + '6')
      }
      return res
    }
    return helper(n, n)
  }

  // 从奇偶来考虑，奇数赋为 0,1,8，偶数赋为空，如果是奇数，就从 i=3 开始搭建，因为计算 i=3 需要 i=1，
  // 而已经初始化了 i=1 的情况，如果是偶数，从 i=2 开始搭建，也已经初始化了 i=0 的情况，所以可以用 for 循环来搭建到 i=n 的情况
  iterate(n) {
    const one = ['0', '1', '8']
    const two = ['']
    let res = two
    if (n % 2 == 1) res = one
    for (let i = (n % 2) + 2; i <= n; i += 2) {
      let t = []
      for (let a of res) {
        if (i != n) t.push('0' + a + '0')
        t.push('1' + a + '1')
        t.push('6' + a + '9')
        t.push('8' + a + '8')
        t.push('9' + a + '6')
      }
      res = t
    }
    return res
  }
}
