Array.prototype.sortReloaded = function (direction = 'asc') {
  switch (direction) {
    case 'asc':
      return this.slice().sort((a, b) => a - b);
    case 'desc':
      return this.slice().sort((a, b) => b - a);
    default:
      return false;
  }
};