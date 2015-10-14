import DS from 'ember-data';

export default DS.Model.extend({
  sets:   DS.attr('array'),
  notes:  DS.attr('string')
});
