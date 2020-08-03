const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://tiagojaques.herokuapp.com';

export default {
  // eslint-disable-next-line comma-dangle
  URL_BACKEND_TOP,
};
