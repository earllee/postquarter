Workouts = new Mongo.Collection('workouts');

// Workouts Schema
Workouts.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    max: 100,
    optional: true
  },
  date: {
    type: new Date(),
    label: 'Date'
  },
  feeling: {
    type: Number,
    label: 'Feeling',
    min: 0,
    max: 5,
    decimal: false
  },
  notes: {
    type: String,
    label: 'Notes',
    optional: true
  },
  // Arrays of IDs should be prefixed with a '_'
  _sets: {
    type: [String],
    label: 'Sets',
    optional: true
  },
  createdBy: {
    type: String,
    autoValue: function () { return Meteor.userId(); },
    denyUpdate: true,
    optional: true
  }
}));

// Helpers
Workouts.helpers({
  sets: function() {
    return Sets.find({ _id: { $in: this._sets } });
  }
});

// Hooks
Workouts.before.insert(function(userId, doc) {
  doc.createdBy = userId;
});

// Allow server-side publishing
if (Meteor.isServer) {
  Workouts.allow({
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
