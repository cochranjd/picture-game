import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ClientENV.locationType
});

Router.map(function() {
    this.resource( 'puzzles', function() {
        this.route( 'show', { path: '/:id' });
    });
});

export default Router;
