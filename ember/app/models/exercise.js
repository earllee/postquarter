import DS from 'ember-data';

export default DS.Model.extend({
  sets: DS.hasMany('set', { polymorphic: true, async: true, inverse: 'exercise' }),

  name: DS.attr('string')
});
