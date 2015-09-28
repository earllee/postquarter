import DS from 'ember-data';

export default DS.Model.extend({
  name:   DS.attr('string'),
  when:   DS.attr('date', {defaultValue: new Date()}),
  value:  DS.attr('string'),
  unit:   DS.attr('string')
});
