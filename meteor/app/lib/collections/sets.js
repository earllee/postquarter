Sets = new Mongo.Collection('sets');

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
    allowedValues: ['lbs', 'kgs']
  },
  _workout: {
    type: String,
    label: 'Workout ID',
    optional: true
  }
}));

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
