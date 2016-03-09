export default function(router) {
  router.map({
    '/': {
      component(resolve) {
        require(['./views/weather'], resolve);
      },
    },
    '/wykresy': {
      component(resolve) {
        require(['./views/charts'], resolve);
      },
    },
  });

  return router;
};
