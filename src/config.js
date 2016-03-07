let config = {
  env: process.env.NODE_ENV,
  api: {
    source: 'https://pogoda.skalagi.pl/api',
  },
};

export default config;
export function api() {
  return config.env !== 'production'
    ? config.api.source
    : '/api';
};
