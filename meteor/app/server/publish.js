

Meteor.publish('workouts', function () {
  return Workouts.find();
});

Meteor.publish('sets', function () {
  return Sets.find();
});