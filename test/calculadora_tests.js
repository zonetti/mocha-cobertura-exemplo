var should = require('should');

var calc = require('../app').calculadora;

describe('Calculadora', function() {
  
  it('deve somar', function() {
    calc.somar(2, 4).should.be.equal(6);
    calc.somar(0, 10).should.be.equal(10);
    calc.somar(5, 7).should.be.equal(12);
  });

  it('deve subtrair', function() {
    calc.subtrair(4, 2).should.be.equal(2);
    calc.subtrair(20, 10).should.be.equal(10);
    calc.subtrair(7, 3).should.be.equal(4);
  });

  it('deve multiplicar', function() {
    calc.multiplicar(2, 4).should.be.equal(8);
    calc.multiplicar(3, 5).should.be.equal(15);
    calc.multiplicar(4, 4).should.be.equal(16);
  });

  it('deve dividir', function() {
    calc.dividir(4, 2).should.be.equal(2);
    calc.dividir(10, 5).should.be.equal(2);
    calc.dividir(12, 3).should.be.equal(4);
  });

});