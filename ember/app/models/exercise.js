import DS from 'ember-data';

export default DS.Model.extend({
  sets: DS.hasMany('setType', { polymorphic: true, async: true }),

  name: DS.attr('string')
});
