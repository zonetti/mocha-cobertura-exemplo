REPORTER=spec

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) -b test/*.js

test-cov: lib-cov
	@NODE_ENV=test TEST_COV=1 $(MAKE) test REPORTER=html-cov > coverage.html
	@rm src-cov -r

lib-cov:
	@jscoverage src src-cov

.PHONY: test test-watch test-cov