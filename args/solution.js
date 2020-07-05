const args = cmd => {
  return cmd
    .trim()
    .replace(/\s*[|>;&].*/, '')
    .split(' ')
}

export default args
