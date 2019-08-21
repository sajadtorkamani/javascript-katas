import _setWith from 'lodash/setWith';

const convertQueryToMap = query => {
  let obj = {};

  if (query === '') {
    return obj;
  }

  query.split('&').forEach(part => {
    const [param, value] = part.split('=');

    _setWith(obj, param, decodeURIComponent(value), Object);
  });

  return obj;
};

export default convertQueryToMap;
