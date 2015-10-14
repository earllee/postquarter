import DS from 'ember-data';

export default DS.Model.extend({
  parent_id:    DS.attr('number'),
  parent_type:  DS.attr('number'),
  name:         DS.attr('string'),
  int_value:    DS.attr('number'),
  float_value:  DS.attr('number'),
  str_value:    DS.attr('string'),
  bool_value:   DS.attr('boolean')
});
