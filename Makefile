test: lint
	@NODE_ENV=test node_modules/.bin/mocha -R spec -t 10000 -b

lint:
	@node_modules/.bin/jshint src test

coverage: lib-cov
	@TEST_COVERAGE=1 NODE_ENV=test ./node_modules/.bin/mocha -R html-cov -t 10000 -b > coverage.html
	@sudo rm src-cov -r

lib-cov:
	@jscoverage --encoding=UTF-8 src src-cov

.PHONY: test