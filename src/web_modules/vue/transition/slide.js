'use strict';

import dyn from 'dynamics.js';

function slide(el, value, done) {

  if (!this.height) {
    el.style.height = null;
    this.height = el.getBoundingClientRect().height;
  }

  value = typeof value != 'number' ? this.height : value;

  dyn.stop(el);
  dyn.animate(el, {
    height: value,
  }, {
    duration: 700,
    complete: function() {
      if (done) done.call();
    },
  });
};

export default {
  enter: function(el, done) {
    slide.call(this, el, null, done);
  },

  enterCancelled: function(el) {
    slide.call(this, el, 0);

  },

  leave: function(el, done) {
    slide.call(this, el, 0, done);
  },

  leaveCancelled: function(el) {
    slide.call(this, el, null);
  },
};
