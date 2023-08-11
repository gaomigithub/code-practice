let person = function () {}
let no = new person()
no instanceof person //true

// 手撕1
function new_instance_of(leftVaule, rightVaule) {
  let rightProto = rightVaule.prototype // 取右表达式的 prototype 值
  leftVaule = leftVaule.__proto__ // 取左表达式的__proto__值
  while (true) {
    if (leftVaule === null) {
      return false
    }
    if (leftVaule === rightProto) {
      return true
    }
    leftVaule = leftVaule.__proto__
  }
}

// 手撕2
// 通过 Object.getPrototypeOf 获取对象的原型，然后和构造函数的 prototype 进行比较，如果在原型链上找到相同的原型对象，则返回 true，否则返回 false。
function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left) // 获取对象的原型
  let prototype = right.prototype // 获取构造函数的 prototype 对象

  // 遍历原型链
  while (true) {
    // 找到了 Object 的终点
    if (proto === null) return false
    // 找到相同的原型对象
    if (proto === prototype) return true
    // 沿着原型链继续向上找
    proto = Object.getPrototypeOf(proto)
  }
}

console.log(myInstanceof('hello', String)) // 输出 true
console.log(myInstanceof(3, Number)) // 输出 true
console.log(myInstanceof([], Array)) // 输出 true
console.log(myInstanceof('', Array)) // 输出 false
