require('should');

var olaMundo = require('../app').olaMundo;

describe('Olá mundo', function() {
  
  it('deve dizer "Olá mundo"', function() {
    olaMundo().should.be.equal('Olá mundo');
  });

});