import DS from 'ember-data';

export default DS.Model.extend({
  set:          DS.belongsTo('setType', { polymorphic: true, async: true }),
  name:         DS.attr('string'),
  intVal:       DS.attr('number'),
  floatVal:     DS.attr('number'),
  strVal:       DS.attr('string'),
  boolVal:      DS.attr('boolean')
});
