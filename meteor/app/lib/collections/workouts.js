Workouts = new Mongo.Collection('workouts');

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
  }
}));

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
