import DS from 'ember-data';

export default DS.Model.extend({

  rest:             DS.attr('number'),
  exercise:         DS.belongsTo('exercise'),
  measurements:     DS.hasMany('measurement'),

  rep: function() {
    return;
  }.computed('measurements'),

  weight: function() {
    return;
  }.computed('measurements')
});
