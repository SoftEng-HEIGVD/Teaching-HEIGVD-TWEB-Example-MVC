var copilot = require('api-copilot');

var beers = [
  { name: "Budweiser", country: "United States" },
  { name: "Smithwicks", country: "Ireland" },
  { name: "Foster's", country: "Australia" },
  { name: "Chimay", country: "Belgium" },
  { name: "Heineken", country: "Netherlands" }
];

// create an API scenario
var scenario = new copilot.Scenario({
  name: 'Some Beers',
  summary: 'Create beers to drink with the API.',
  baseUrl: 'http://localhost:3000',
  defaultRequestOptions: {
    json: true
  }
});

scenario.step('clear previous data', function() {
  return this.delete({
    url: '/beers'
  });
});

scenario.step('create beers', function() {

  var requests = [];

  var n = beers.length;
  for (var i = 0; i < n; i++) {
    requests.push(this.post({
      url: '/beers',
      body: beers[i]
    }));
  }

  return this.all(requests);
});

module.exports = scenario;
