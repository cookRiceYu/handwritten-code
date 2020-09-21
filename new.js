// new 关键字实现
function myNew(Fn, ...args) {
  const instance = {};

  if (Fn.prototype) {
    Object.setPrototypeOf(instance, Fn.prototype);
  }

  const res = Fn.apply(instance, args);

  if (typeof res === "function" || (typeof res === "object" && res !== null))
    return res;
  return instance;
}

// 测试
function Person(name) {
  this.name = name
}
Person.prototype.sayName = function() {
  console.log(`My name is ${this.name}`)
}
const me = myNew(Person, 'Jack')
me.sayName()
console.log(me)
