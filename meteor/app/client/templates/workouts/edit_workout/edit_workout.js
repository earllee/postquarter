/*****************************************************************************/
/* EditWorkout: Event Handlers */
/*****************************************************************************/
Template.EditWorkout.events({
});

/*****************************************************************************/
/* EditWorkout: Helpers */
/*****************************************************************************/
Template.EditWorkout.helpers({
  beforeRemove: function() {
    return function(collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete the workout logged on "' + doc.date + ' named ' + doc.name + '?'))
        this.remove();
      Router.go('workoutsList');
    }
  }
});

/*****************************************************************************/
/* EditWorkout: Lifecycle Hooks */
/*****************************************************************************/
Template.EditWorkout.onCreated(function () {
});

Template.EditWorkout.onRendered(function () {
});

Template.EditWorkout.onDestroyed(function () {
});
