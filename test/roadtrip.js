var expect = require('chai').expect;
var Roadtrip = require('../src/roadtrip.js');

describe('Roadtrip', function() {

  describe('#testing()', function () {
    it('should work', function () {
      var roadtrip = new Roadtrip();
      expect( roadtrip.testing() ).to.equal( 'Hello' );
    });
  });

});
