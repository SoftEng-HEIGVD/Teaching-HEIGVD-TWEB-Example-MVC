/**
 * This module defines
 */

var beers = [];


/**
 * This is one of the module patterns. We export the constructor,
 * so that scripts that use this module can do:
 * var beersDS = require('datastore').beersDataStore
 * var beers = beersDS.getAll();
 *
 * https://darrenderidder.github.io/talks/ModulePatterns/#/9
 */


var addBeer = function(beer) {
  beers.push(beer);
}

var getAllBeers = function() {
  var clone = beers.slice(0);
  return clone;
}

exports.beersDataStore = {
  add: addBeer,
  getAll: getAllBeers
}
