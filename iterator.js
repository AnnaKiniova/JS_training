let customIterable = {
  from: 1,
  to: 5
};
customIterable[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true, value: undefined };
      }
    }
  };
};

for (let x of customIterable) {
  console.log(x);
}
