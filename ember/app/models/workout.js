import DS from 'ember-data';

export default DS.Model.extend({
  when:                 DS.attr('date'),
  setOrdering:          DS.attr(),  // array
  notes:                DS.attr('string'),

  user:                 DS.belongsTo('user'),
  team:                 DS.belongsTo('team'),
  sets:                 DS.hasMany('set'),
  workoutTemplate:      DS.belongsTo('workoutTemplate'),

  difference: Ember.computed(function() {
    return;
  })
});
