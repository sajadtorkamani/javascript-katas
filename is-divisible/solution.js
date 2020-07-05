const isDivisible = (n, ...nums) => nums.every(num => n % num === 0)

export default isDivisible
