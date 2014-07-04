/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  minifyCSS: {
    enabled: true,
    options: {}
  }
});

module.exports = app.toTree();