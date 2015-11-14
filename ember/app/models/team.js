import DS from 'ember-data';

export default DS.Model.extend({
  name:         DS.attr('string'),
  association:  DS.attr('string'),
  sport:        DS.attr('string'),
  sponsor:      DS.attr('string'),
  sex:          DS.attr('string'),

  // Converts encoded sex, int, to sex
  computedSex: function() {
    var map = ['Male', 'Female', 'Co-Ed'];
    return map[this.get('sex')];
  }.property('sex'),

  // Converts encoded sex, int, to posessive noun
  teamGender: function() {
    var map = ['Men\'s', 'Women\'s', 'Co-Ed'];
    return map[this.get('sex')];
  }.property('sex')

});
