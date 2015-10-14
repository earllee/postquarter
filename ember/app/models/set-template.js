import DS from 'ember-data';

export default DS.Model.extend({
  exerciseId:       DS.attr('number'),
  rest:             DS.attr('number'),

  workoutTemplate:  DS.belongsTo('workoutTemplate'),
  measurements:     DS.hasMany('measurement')

});
