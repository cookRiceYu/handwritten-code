// bind 实现
Function.prototype.myBind = function (context = globalThis) {
  const fn = this;

  const args = Array.from(arguments).splice(1);
  const newFunc = function () {
    const newArgs = args.concat(...arguments);
    if (this instanceof newFunc) {
      // 通过 new 调用，绑定 this 为实例对象
      fn.apply(this, newArgs);
    } else {
      // 通过普通方式调用，绑定context
      fn.apply(context, newArgs);
    }
  };
  // 支持 new 调用方式
  newFunc.prototype = Object.create(fn.prototype);
  return newFunc;
};

// 测试
const me = { name: "Jack" };
const other = { name: "Jackson" };

function say() {
  console.log(`My name is ${this.name || "default"}`);
}
const meSay = say.myBind(me);
meSay();
const otherSay = say.myBind(other);
otherSay();
