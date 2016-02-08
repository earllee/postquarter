Template.registerHelper("workoutIds", function() {
  return Workouts.find({}).map(function(item){
    return { label: item.name, value: item._id } });
});
