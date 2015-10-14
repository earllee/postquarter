import DS from 'ember-data';

export default DS.Model.extend({
  userType: DS.belongsTo('userType', { polymorphic: true, async: true }),

  name:   DS.attr('string'),
  when:   DS.attr('date', {defaultValue: new Date()}),
  value:  DS.attr('string'),
  unit:   DS.attr('string')
});
