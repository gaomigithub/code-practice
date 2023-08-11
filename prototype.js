// 原型链继承
// 缺点：1.每个实例对引用类型属性的修改都会被其他实例对象共享
//      2. 在创建child实例的时候没办法向parent传参，child没办法定义自己的属性
function Parent() {
  this.name = ['arzh']
  this.name2 = '123'
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child() {}

Child.prototype = new Parent()
Child.prototype.constructor = Child

let c = new Child()
let c2 = new Child()
c.name.push('123')
c.name2 = '456'

c.getName()
c2.getName()

console.log(c.name2)
console.log(c2.name2)
//   ————————————————
//   版权声明：本文为CSDN博主「月下独Coding」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
//   原文链接：https://blog.csdn.net/Zhouyunfeier/article/details/131294545
