module.exports = function(Team) {

  Team.status = function(cb) {
    var currentDate = new Date(),
        currentMonth = currentDate.getMonth(),
        IN_SEASON = 7,
        OUT_SEASON = 10;

    console.log('Current month is ' + currentMonth);

    var response;

    if (currentMonth >= IN_SEASON && currentMonth <= OUT_SEASON)
      response = 'Team is currently in-season.'
    else
      response = 'Team is in its off-season.'

    cb(null, response);
  };

  Team.getName = function(teamId, cb) {
    Team.findById(teamId, function(err, instance) {
      response = 'Name of team is ' + instance.name;
      cb(null, response);
    });
  };

  Team.remoteMethod('status', {
    http:     { path: '/status', verb: 'get' },
    returns:  { arg: 'status', type: 'string' }
  });

  Team.remoteMethod('getName', {
    http:     { path: '/getname', verb: 'get' },
    accepts:  { arg: 'id', type: 'number', http: { source: 'query' } },
    returns:  { arg: 'name', type: 'string' }
  });


  /**
   * @description Format response to fit Ember REST adapter.
   **/
  Team.afterRemote('find', function(context, model, next) {
    context.result = { 'teams': context.result };
    next();
  });

  /**
   * @description Format response to fit Ember REST adapter.
   **/
  Team.afterRemote('findById', function(context, model, next) {
    context.result = { 'team': context.result };
    next();
  });

  /**
   * @description Format response to fit Ember REST adapter.
   **/
  Team.observe('before save', function(context, next) {
    if (context.instance && context.instance.team) {
      context.instance.setAttribute('name', context.instance.team.name);
      context.instance.setAttribute('sport', context.instance.team.sport);
      context.instance.setAttribute('sex', context.instance.team.sex);
      context.instance.unsetAttribute('team');
    }

    next();
  });

};
