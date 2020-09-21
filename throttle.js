// 节流
function throttle(fn, ms = 1000) {
  let canRun = true;
  return function (...args) {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, args);
      canRun = true;
    }, ms);
  };
}

// 测试
const task = () => {
  console.log("run task");
};
const throttleTask = throttle(task, 1000);
window.addEventListener("scroll", throttleTask);
