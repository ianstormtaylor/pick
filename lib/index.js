
/**
 * Expose `pick`.
 */

module.exports = pick;

/**
 * Pick keys from an `obj`.
 *
 * @param {Object} obj
 * @param {Strings} keys...
 * @return {Object}
 */

function pick(obj){
  var keys = [].slice.call(arguments, 1);
  var ret = {};

  for (var i = 0, key; key = keys[i]; i++) {
    if (key in obj) ret[key] = obj[key];
  }

  return ret;
}