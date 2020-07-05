const validateUsr = username => {
  return (
    username.length >= 4 &&
    username.length <= 16 &&
    username.match(/[^a-z0-9_]/) === null
  )
}

export default validateUsr
