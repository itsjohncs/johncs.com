.PHONY: serve env deps build

PHIAL = PYTHONPATH=./phial python -m phial.__main__

build: env deps
	gulp

serve:
	$(PHIAL) --testing app.py

env:
	virtualenv --prompt '(phial)' env

deps: env
	env/bin/pip install --upgrade PyYAML pystache docutils pygments
	bower install normalize.css
	npm install gulp gulp-shell gulp-inject gulp-foreach gulp-concat gulp-minify-css gulp-minify-html gulp-imagemin gulp-webserver gulp-uncss gulp-less
