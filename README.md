# mocha-cobertura-exemplo [![Build Status](https://secure.travis-ci.org/zonetti/mocha-cobertura-exemplo.png)](http://travis-ci.org/zonetti/mocha-cobertura-exemplo)

Exemplo de como fazer relatório de cobertura usando Mocha.

    $ git clone https://github.com/zonetti/mocha-cobertura-exemplo.git
    $ cd mocha-cobertura-exemplo
    $ [sudo] npm install

Para rodar os testes utilize `npm test` ou `make test`.

Para gerar o relatório de cobertura de código, certifique-se primeiramente de ter instalado o [`jscoverage`][jscoverage], então utilize `make coverage`.

[jscoverage]: https://github.com/visionmedia/node-jscoverage