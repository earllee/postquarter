import Ember from 'ember';

export default Ember.Route.extend({

  // Get model for this route
  model: function() {
    return this.store.findAll('team');
  },

  // Set model as 'teams' for route's controller
  setupController: function(controller, model) {
    controller.set('teams', model);
  }

});
