import Ember from 'ember';

export default Ember.ObjectController.extend({
    init: function() {
        this._super();

        var rows = this.get( 'rows' ),
            cols = this.get( 'cols' );

        var tiles = Ember.A();

        for ( var i=0; i<rows; i++ ) {
            for ( var j=0; j<cols; j++ ) {
                tiles.pushObject({
                    col: j,
                    row: i
                });
            }
        }
        this.set( 'tiles', tiles );
        this.resetInfo();
    },

    rows: 10,

    cols: 10,

    puzzleTitle: null,

    defaultTitle: 'Unsolved...',

    viewList: Ember.A(),

    registerView: function( view ) {
        this.get( 'viewList' ).pushObject( view );
    },

    unregisterView: function( view ) {
        this.get( 'viewList' ).removeObject( view );
    },

    resetInfo: function() {
        this.set( 'puzzleTitle', this.get( 'defaultTitle' ));
    },

    actions: {

        reveal: function() {
            this.get( 'viewList' ).forEach( function( view ) {
                view.reveal();
            });

            this.set( 'puzzleTitle', this.get( 'model.title' ));
        },

        reset: function() {
            this.get( 'viewList' ).forEach( function( view ) {
                view.reset();
            });

            this.resetInfo();
        },

        random: function() {
            var cols = this.get( 'cols' ),
                rows = this.get( 'rows' ),
                rCol = Math.floor( Math.random() * cols),
                rRow = Math.floor( Math.random() * rows);

            this.get( 'viewList' ).forEach( function( view ) {
                if ( view.get( 'row' ) === rRow && view.get( 'col' ) === rCol ) {
                    view.reveal();
                }
            });
        }
    }
});