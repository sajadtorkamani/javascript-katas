const qs = require('querystring')

/**
 * @param url {string}
 * @param [paramsToStrip] {Array<string>}
 */
const stripUrlParams = (url, paramsToStrip = []) => {
  const match = url.match(/(.+)\?(.+)/)

  // Return unchanged url if no query params are present.
  if (!match) {
    return url
  }

  const domain = match[1]
  const paramsString = match[2]
  let newParams = {}

  // Remove duplicates
  paramsString.split('&').forEach(param => {
    const [paramKey, paramValue] = param.split('=')

    if (!newParams.hasOwnProperty(paramKey)) {
      newParams[paramKey] = paramValue
    }
  })

  // Strip blacklisted params
  paramsToStrip.forEach(param => delete newParams[param])

  return `${domain}?${qs.stringify(newParams)}`
}

export default stripUrlParams
