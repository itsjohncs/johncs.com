.PHONY: serve serve-prod env deps prod

PHIAL = PYTHONPATH=./phial python -m phial.__main__

serve:
	DRAFTING=1 $(PHIAL) --testing app.py

serve-prod:
	$(PHIAL) --testing app.py

prod:
	$(PHIAL) app.py

env:
	virtualenv --prompt '(phial)' env

deps:
	pip install PyYAML pystache docutils pygments
