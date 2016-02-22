Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
  'click .logout': function(e) {
    e.preventDefault();
    Meteor.logout();
  }
});
