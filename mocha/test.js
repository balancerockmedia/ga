var assert = require('assert');

var MathHelpers = require('./mathHelpers').MathHelpers;

// mocha --reporter spec

describe('MathHelpers', function() {
    describe('add()', function() {
        it('should return 3 when called with 1,2', function() {
            assert.strictEqual(MathHelpers.add(1,2), 3);
        });
    });
});