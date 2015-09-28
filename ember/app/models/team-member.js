import DS from 'ember-data';

export default DS.Model.extend({
  user_id:    DS.attr('number'),
  team_id:    DS.attr('number'),
  role:       DS.attr('string'),
  start_date: DS.attr('date', {defaultValue: new Date()}),
  end_date:   DS.attr('date')
});
