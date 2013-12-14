var should = require('should');

var hello = require('../app').helloWorld;

describe('Hello World', function() {
  
  it('deve dizer "Hello world"', function() {
    hello().should.be.equal('Hello world');
  });

});
