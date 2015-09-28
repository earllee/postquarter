import DS from 'ember-data';

export default DS.Model.extend({
  exercise_id:  DS.attr('number'),
  rest:         DS.attr('number')
});
