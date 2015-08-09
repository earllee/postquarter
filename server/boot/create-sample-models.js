module.exports = function(app) {

  app.dataSources.psqlDs.autoupdate('Team', function(err) {
    if (err) throw err;

    var sampleData = [
      { id: 0, name: 'Yale Bulldogs', sport: 'Crew', sex: 0 },
      { id: 1, name: 'Yale Bulldogs', sport: 'Football', sex: 0 },
      { id: 2, name: 'Yale Bulldogs', sport: 'Hockey', sex: 0 },
      { id: 3, name: 'Yale Bulldogs', sport: 'Lacrosse', sex: 1 },
      { id: 4, name: 'Harvard Crimson', sport: 'Football', sex: 0 },
      { id: 5, name: 'Princeton Tigers', sport: 'Track and Field', sex: 3 }
    ];

    sampleData.forEach(function(data) {
      app.models.Team.upsert(data, function(err, team) {
        if (err) throw err;
        console.log('Model upserted: ', team);
      });
    });

  });

};
