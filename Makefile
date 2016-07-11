.PHONY: build watch serve clean deps

build: clean
	mkdir ./build ./build/app-output ./build/crush-output ./build/collect-output || true

	@echo === Python app ===
	cd pythonapp/; ../env/bin/python app.py

	@echo === Gulp app - crush ===
	cd gulpapp/; gulp crush

	@echo === Bash app - collect ===
	cd bashapp/; bash collect.sh

watch:
	# entr is cross-platform and easy to install. Take a look for it on your
	# favorite package manager.
	find . | grep -v '\./build/.*' | entr -d make

serve:
	@echo 'Serving at http://127.0.0.1:50191'
	cd ./build/collect-output; ruby -rwebrick -e'WEBrick::HTTPServer.new(:Port => 50191, :DocumentRoot => Dir.pwd).start'

clean:
	rm -rf ./build/app-output ./build/crush-output ./build/collect-output

deps:
	virtualenv env
	./env/bin/pip install pygments pystache docutils pyyaml
	npm install gulp gulp-concat gulp-foreach gulp-less gulp-inject

ready-publish: build
	./ready-publish.sh
