import DS from 'ember-data';

export default DS.Model.extend({
  exercise_id:  DS.attr('number'),
  when:         DS.attr('date', {defaultValue: new Date()}),
  rest:         DS.attr('number'),

  workout:      DS.belongsTo('workout'),
  measurements: DS.hasMany('measurement'),

  rep: function() {
    return;
  }.computed('measurements'),

  weight: function() {
    return;
  }.computed('measurements')
});
