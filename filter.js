Array.prototype.myFilter = function (callback, thisArg) {
  if (this == undefined) throw new TypeError("this is null or not undefined");

  if (typeof callback !== "function")
    throw new TypeError(callback + "is not a function");

  const res = [];
  // 让 O称为回调函数的对象传递（强制转换对象）
  const O = Object(this);
  // >>> 0 保证了len为number，且为正整数
  const len = O.length >>> 0;
  for (let i = 0; i < len; i++) {
    // 检查i是否在O的属性
    if (i in O) {
      // 回调函数调用传参
      if (callback.call(thisArg, O[i], i, O)) {
        res.push(O[i]);
      }
    }
  }
};
