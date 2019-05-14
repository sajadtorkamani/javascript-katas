const qs = require('querystring');

/**
 * @param url {string}
 * @param param {string}
 *
 * @return {string}
 */
const addOrChangeUrlParameter = (url, param) => {
  if (!param) {
    return url;
  }

  const [domain, queryString] = url.split(/\?=?/);
  let params = qs.decode(queryString);

  const [paramKey, paramValue] = param.split('=');
  params[paramKey] = paramValue;

  return `${domain}?${qs.stringify(params)}`;
};


export default addOrChangeUrlParameter;