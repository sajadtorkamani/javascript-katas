/**
 * @param secret {*}
 * @return {Object}
 */
const createSecretHolder = secret => {
  let _secret = secret

  return {
    getSecret: () => _secret,
    setSecret: newSecret => (_secret = newSecret)
  }
}

export default createSecretHolder
