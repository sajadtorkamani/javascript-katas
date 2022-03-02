const helpZoom = nums => {
  return nums.join('') === nums.reverse().join('') ? 'Yes' : 'No'
}

export default helpZoom
