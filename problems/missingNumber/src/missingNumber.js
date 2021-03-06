
var findMissingNumber = function(testArray) {
  for (var i = 1; i < 100001; i++) {
    if (!_.contains(testArray, i)) {
      return i;
    }
  }
};

/**
 * It's dangerous to go without an array! Use this. You'll need underscore.
 *
 * Generates an array with every number between 1 and 100000, with one random
 * number excluded.
 *
 * @return {Array} An array of numbers.
 */
var testArray = (function() {
  var rand = Math.floor(Math.random() * 100000);
  var result = [];

  for (var i = 1; i <= 100000; i++) {
    i !== rand && result.push(i);
  }

  return _.shuffle(result);
}());
