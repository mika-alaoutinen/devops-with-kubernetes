const defaultUrl = 'http://localhost:8081/api';

if (!process.env.VUE_APP_BACKEND_URL) {
  console.error('could not read VUE_APP_BACKEND_URL');
  console.info('using default backend url', defaultUrl);
}

// eslint-disable-next-line import/prefer-default-export
export const backendUrl = process.env.VUE_APP_BACKEND_URL || defaultUrl;
