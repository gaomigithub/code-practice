// 去重

// 7. 利用hasOwnProperty
function unique(arr) {
  var obj = {}
  return arr.filter(function (item, index, arr) {
    console.log(111, typeof item + item)

    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true)
  })
}

var arr = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {},
]
console.log(unique(arr))

//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}]   //所有的都去重了

// 1. 利用ES6 Set去重（ES6中最常用）
console.log([...new Set(arr)])
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
