var should = require('should');

var hello = require('../app').helloWorld;

describe('Hello World', function() {
  
  it('deve dar "hello"', function() {
    hello().should.be.equal('Hello world');
  });

});