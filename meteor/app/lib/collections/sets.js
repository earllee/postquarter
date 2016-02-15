Sets = new Mongo.Collection('sets');

// Schema
Sets.attachSchema(new SimpleSchema({
  exercise: {
    type: String,
    label: 'Exercise'
  },
  rest: {
    type: Number,
    label: 'Rest Period',
    optional: true
  },
  reps: {
    type: Number,
    label: 'Reps'
  },
  resistance: {
    type: Number,
    label: 'Weight/Resistance'
  },
  resistanceType: {
    type: String,
    label: 'Resistance Type',
    defaultValue: 'lbs',
    allowedValues: ['lbs', 'kgs', '% max']
  },
  // Arrays of IDs should be prefixed with a '_'
  _workout: {
    type: String,
    label: 'Workout ID',
    optional: true
  }
}));

// Callbacks

// Add Set to Workout - to 1:N Workout:Set relationship
Sets.after.insert(function(userId, doc) {
  Workouts.update({ _id: doc._workout }, { $push: { _sets: this._id } }, function(err, res) {
    // Delete Set if we fail to associate with Workout
    if (err) {
      Sets.removeOne({ _id: this._id })
      console.log('Failed to add set ID to workout for some reason.')
    }

    return res;
  });
});

if (Meteor.isServer) {
  Sets.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
