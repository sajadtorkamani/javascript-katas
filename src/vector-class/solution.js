function Vector(points) {
  this.points = points
}

/**
 * Create a new vector by adding the current vector with another vector.
 *
 * @param otherVector {Vector}
 * @return {Vector}
 */
Vector.prototype.add = function(otherVector) {
  this._assertSameLength(otherVector)
  const points = this.points.map(
    (point, index) => point + otherVector.points[index]
  )

  return new Vector(points)
}

/**
 * Create a new vector by subtracting the passed in vector from the current vector.
 *
 * @param otherVector {Vector}
 * @return {Vector}
 */
Vector.prototype.subtract = function(otherVector) {
  this._assertSameLength(otherVector)
  const points = this.points.map(
    (point, index) => point - otherVector.points[index]
  )

  return new Vector(points)
}

/**
 * Return the total sum of all the points multiplied by each another.
 *
 * @param otherVector {Vector}
 * @return {number}
 */
Vector.prototype.dot = function(otherVector) {
  this._assertSameLength(otherVector)

  return this.points
    .map((point, index) => point * otherVector.points[index])
    .reduce((a, b) => a + b)
}

/**
 * @return {number}
 */
Vector.prototype.norm = function() {
  const sum = this.points.reduce((a, b) => a + Math.pow(b, 2), 0)

  return Math.sqrt(sum)
}

/**
 * Check if two vectors are equal.
 *
 * @param otherVector {Vector}
 *
 * @return {boolean}
 */
Vector.prototype.equals = function(otherVector) {
  return (
    this.points.length === otherVector.points.length &&
    this.points.every((point, index) => {
      return point === otherVector.points[index]
    })
  )
}

/**
 * Return string representation of object.
 *
 * @return {string}
 */
Vector.prototype.toString = function() {
  return '(' + this.points.toString() + ')'
}

/**
 * Assert that two vectors have the same length.
 *
 * @param otherVector {Vector}
 * @private
 */
Vector.prototype._assertSameLength = function(otherVector) {
  if (this.points.length !== otherVector.points.length) {
    throw new Error('Vectors must be of the same length.')
  }
}

export default Vector
