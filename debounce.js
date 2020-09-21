// 防抖
function debounce(fn, ms = 1000) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
}

// 测试
const task = () => {
  console.log("run task");
};
const debounceTask = debounce(task, 1000);

window.addEventListener("scroll", debounceTask);
