import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
    title: attr(),
    puzzle_image_path: attr()
});