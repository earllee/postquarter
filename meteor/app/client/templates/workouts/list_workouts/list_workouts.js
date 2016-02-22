/*****************************************************************************/
/* ListWorkouts: Event Handlers */
/*****************************************************************************/
Template.ListWorkouts.events({
});

/*****************************************************************************/
/* ListWorkouts: Helpers */
/*****************************************************************************/
Template.ListWorkouts.helpers({
  workouts: function() {
    return Workouts.find({ createdBy: Meteor.userId() });
  }
});

/*****************************************************************************/
/* ListWorkouts: Lifecycle Hooks */
/*****************************************************************************/
Template.ListWorkouts.onCreated(function () {
});

Template.ListWorkouts.onRendered(function () {
});

Template.ListWorkouts.onDestroyed(function () {
});
