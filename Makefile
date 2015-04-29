.PHONY: serve serve-prod env deps prod publish

PHIAL = PYTHONPATH=./phial python -m phial.__main__

serve:
	$(PHIAL) --testing app.py

env:
	virtualenv --prompt '(phial)' env

deps:
	env/bin/pip install --upgrade PyYAML pystache docutils pygments
