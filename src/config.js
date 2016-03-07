let config = {
  env: process.env.NODE_ENV,
  api: {
    source: 'https://weatherapi.skalagi.pl',
  },
};

export default config;
export function api() {
  return config.env !== 'production'
    ? config.api.source
    : '/api';
};
