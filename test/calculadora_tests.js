require('should');

var calculadora = require('../app').calculadora;

describe('Calculadora', function() {
  
  it('deve somar', function() {
    calculadora.somar(2, 4).should.be.equal(6);
    calculadora.somar(0, 10).should.be.equal(10);
    calculadora.somar(5, 7).should.be.equal(12);
  });

  it('deve subtrair');

  it('deve multiplicar', function() {
    calculadora.multiplicar(2, 4).should.be.equal(8);
    calculadora.multiplicar(3, 5).should.be.equal(15);
    calculadora.multiplicar(4, 4).should.be.equal(16);
  });

  it('deve dividir', function() {
    calculadora.dividir(4, 2).should.be.equal(2);
    calculadora.dividir(10, 5).should.be.equal(2);
    calculadora.dividir(12, 3).should.be.equal(4);
  });

});