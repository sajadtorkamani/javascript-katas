const validate = password => {
  return (
    typeof password === 'string' &&
    password.length >= 6 &&
    !/\W/.test(password) &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password)
  )
}

export default validate
