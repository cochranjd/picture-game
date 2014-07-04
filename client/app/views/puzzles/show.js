import Ember from 'ember';

export default Ember.View.extend({
    classNames: [ 'puzzle-container' ],

    willDestroyElement: function() {
        this.get( 'controller' ).resetInfo();
    }
});