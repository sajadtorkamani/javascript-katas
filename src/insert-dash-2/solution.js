const insertDashII = num => {
  return num
    .toString()
    .replace(/([13579])(?=([13579]))/g, '$1-')
    .replace(/([2468])(?=([2468]))/g, '$1*')
}

export default insertDashII
