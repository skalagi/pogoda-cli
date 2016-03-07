let tape = require('tape');

tape('Test if tests will work', function(t) {
  t.equal(global, window);
  t.end();
});
