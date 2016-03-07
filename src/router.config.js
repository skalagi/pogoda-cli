import weather from './views/weather';

export default function(router) {
  router.map({
    '/': {
      component: weather,
    },
  });
  return router;
};
