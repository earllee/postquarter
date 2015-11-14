import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save: function() {

      var teamData = {
        'name': this.get('name'),
        'sport': this.get('sport'),
        'sex': parseInt(this.get('sex')),
      };

      var team = this.store.createRecord('team', teamData);
      team.save();

    }
  }

});
