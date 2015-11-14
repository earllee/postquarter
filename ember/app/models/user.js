import DS from 'ember-data';

export default DS.Model.extend({
  name:     DS.attr('string'),
  sex:      DS.attr('string'),
  birthday: DS.attr('date'),
  email:    DS.attr('string'),

  workouts: DS.hasMany('workout', {async: true})

});
