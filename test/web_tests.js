require('should');
var request = require('request');

var web = require('../app').web;

var PORTA = process.env.PORT || 1337;

describe('Web', function() {
  
  before(function(done) {
    web.listen(PORTA, done);
  });

  it('deve retornar "Minha página web"', function(done) {
    request('http://localhost:' + PORTA, function(err, res, body) {
      if (err) throw err;
      body.should.be.equal('Minha página web');
      done();
    });
  });

});