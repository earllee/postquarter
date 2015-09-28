import DS from 'ember-data';

export default DS.Model.extend({
  exercise_id:  DS.attr('number'),
  when:         DS.attr('date', {defaultValue: new Date()}),
  rest:         DS.attr('number'),
});
