// call 实现
Function.prototype.myCall = function (context = globalThis) {
  // 关键步骤，在 context 上调用方法，触发 this 绑定为 context
  const key = Symbol("key");
  context[key] = this;
  let args = [].splice.call(arguments, 1);
  let res = context[key](...args);
  delete context[key];
  return res;
};

// 测试
const me = { name: "Jack" };
function say() {
  console.log(`My name is ${this.name || "default"}`);
}
say.myCall(me);
