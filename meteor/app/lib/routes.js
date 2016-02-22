Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/login', {
  name: 'login',
  controller: 'HomeController',
  where:'client'
});

/*
 * Workouts Routes
 */
Router.route('/workouts/create', {
  name: 'createWorkout',
  controller: 'WorkoutsController',
  action: 'create',
  where: 'client',
  onBeforeAction: function() {
    var currentUser = Meteor.userId();
    if (currentUser)
      this.next();
    else
      this.router.go('login');
  }
});

Router.route('/workouts', {
  name: 'workoutsList',
  controller: 'WorkoutsController',
  action: 'list',
  where: 'client',
  onBeforeAction: function() {
    var currentUser = Meteor.userId();
    if (currentUser)
      this.next();
    else
      this.router.go('login');
  }
});

Router.route('/workouts/:_id', {
  name: 'editWorkout',
  controller: 'WorkoutsController',
  action: 'edit',
  where: 'client',
  onBeforeAction: function() {
    var currentUser = Meteor.userId();
    if (currentUser)
      this.next();
    else
      this.router.go('login');
  }
});

/*
 * Sets Routes
 */
Router.route('/sets/create', {
  name: 'createSet',
  controller: 'SetsController',
  action: 'create',
  where: 'client',
  onBeforeAction: function() {
    var currentUser = Meteor.userId();
    if (currentUser)
      this.next();
    else
      this.router.go('login');
  }
});


Router.route('register', {
  name: 'register',
  controller: 'RegisterController',
  where: 'client'
});
