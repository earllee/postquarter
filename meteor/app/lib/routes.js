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

/*
 * Workouts Routes
 */
Router.route('/workouts/create', {
  name: 'createWorkout',
  controller: 'WorkoutsController',
  action: 'create',
  where: 'client'
});

Router.route('/workouts', {
  name: 'workoutsList',
  controller: 'WorkoutsController',
  action: 'list',
  where: 'client'
});

Router.route('/workouts/:_id', {
  name: 'editWorkout',
  controller: 'WorkoutsController',
  action: 'edit',
  where: 'client'
});

/*
 * Sets Routes
 */
Router.route('/sets/create', {
  name: 'createSet',
  controller: 'SetsController',
  action: 'create',
  where: 'client'
});
