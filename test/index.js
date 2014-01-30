
try {
  var pick = require('pick');
} catch (e) {
  var pick = require('..');
}

var assert = require('assert');

describe('pick', function(){
  it('should pick keys', function(){
    var obj = { one: 1, two: 2, three: 3 };
    assert.deepEqual({ one: 1, three: 3 }, pick(obj, 'one', 'three'));
  });

  it('should return a clone', function(){
    var obj = { one: 1 };
    assert.notEqual({ one: 1 }, pick(obj, 'one'));
    assert.deepEqual({ one: 1 }, pick(obj, 'one'));
  });

  it('should not pick non-existent keys', function(){
    var obj = { one: 1 };
    assert.deepEqual({}, pick(obj, 'two'));
  });
});