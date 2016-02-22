/*****************************************************************************/
/* Register: Event Handlers */
/*****************************************************************************/
Template.Register.events({
  'submit form': function(e) {
    e.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Accounts.createUser({
      email: email,
      password: password
    }, function(e) {
      if (e)
        console.log(e);
      else
        Router.go('home');
    });
  }
});

/*****************************************************************************/
/* Register: Helpers */
/*****************************************************************************/
Template.Register.helpers({
});

/*****************************************************************************/
/* Register: Lifecycle Hooks */
/*****************************************************************************/
Template.Register.onCreated(function () {
});

Template.Register.onRendered(function () {
});

Template.Register.onDestroyed(function () {
});
