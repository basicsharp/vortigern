var Bluebird = require('bluebird');
Bluebird.config({ warnings: false });
if ('window' in this)
  window.Promise = Bluebird;
else
  global.Promise = Bluebird;
require('isomorphic-fetch');

var context = require.context('../../src', true, /.test\.tsx?$/);
context.keys().forEach(context);
