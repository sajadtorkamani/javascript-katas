const hidePasswordFromConnection = (str: string): string => {
  return str.replace(/(?<=password=)[^&]*/, password => {
    return '*'.repeat(password.length)
  })
}

export default hidePasswordFromConnection
