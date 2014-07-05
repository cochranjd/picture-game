import Ember from 'ember';

export default Ember.Component.extend({

    attributeBindings: [ 'style', 'class' ],

    imageUrl: null,

    style: function() {
        return "background: url(" + this.get( 'imageUrl' ) + ") no-repeat center center fixed;-webkit-background-size: cover;";
    }.property( 'imageUrl' )
});