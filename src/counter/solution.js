function Counter() {
  this.value = 0
}

Counter.prototype.incr = function() {
  this.value += 1
}

Counter.prototype.valueOf = function() {
  return this.value
}

export default Counter
