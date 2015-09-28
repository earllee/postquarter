import DS from 'ember-data';

export default DS.Model.extend({
  when:                 DS.attr('date'),
  set_ordering:         DS.attr(),  // array
  notes:                DS.attr('string'),
  workout_template_id:  DS.attr('number')
});
