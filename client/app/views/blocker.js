import Ember from 'ember';

export default Ember.View.extend({
   classNames: [ 'blocker' ],

   classNameBindings: [ 'columnName', 'rowName' ],

   didInsertElement: function() {
       this.registerWithController();
   },

   willDestroyElement: function() {
       this.unregisterWithController();
   },

   registerWithController: function() {
       this.get( 'controller' ).registerView( this );
   },

   unregisterWithController: function() {
       this.get( 'controller' ).unregisterView( this );
   },

   columnName: function() {
       return 'col-' + this.get( 'col' );
   }.property( 'col' ),

   rowName: function() {
       return 'row-' + this.get( 'row' );
   }.property( 'row' ),

   reveal: function() {
       this.$().animate({
           opacity: 0,
       }, 750 );
   },

   reset: function() {
       this.$().animate({
           opacity: 1.0,
       }, 750 );
   },

   mouseEnter: function() {
       this.$().addClass( 'highlight' );
   },

   mouseLeave: function() {
       this.$().removeClass( 'highlight' );
   },

   click: function() {
       this.$().animate({
           opacity: 0
       }, 1000 );
   }
});