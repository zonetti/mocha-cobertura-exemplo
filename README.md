# mocha-cobertura-exemplo [![Build Status](https://secure.travis-ci.org/zonetti/mocha-cobertura-exemplo.png)](http://travis-ci.org/zonetti/mocha-cobertura-exemplo)

Como fazer testes e relatório de cobertura usando o [Mocha][mocha].

O exemplo também utiliza [jshint][jshint] para verificar a qualidade e os padrões do código.

## Instalação

    $ git clone https://github.com/zonetti/mocha-cobertura-exemplo.git
    $ cd mocha-cobertura-exemplo
    $ [sudo] npm install

## Execução dos testes

Para rodar os testes utilize `npm test` ou `make test`.

Para gerar o relatório de cobertura de testes, certifique-se primeiramente de ter instalado o [`jscoverage`][jscoverage], então utilize `make coverage`.

[mocha]: http://visionmedia.github.io/mocha/
[jscoverage]: https://github.com/visionmedia/node-jscoverage/
[jshint]: https://github.com/jshint/jshint/