Array.prototype.each = function(callback) {
  for (let index = 0; index < this.length; index++) {
    const callbackResult = callback(this[index], index);

    if (callbackResult === true) {
      return;
    }
  }
};
