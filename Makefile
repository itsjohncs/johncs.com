.PHONY: serve serve-prod env deps prod publish

PHIAL = PYTHONPATH=./phial python -m phial.__main__

serve:
	DRAFTING=1 $(PHIAL) --testing app.py

serve-prod:
	$(PHIAL) --testing app.py

publish:
	# Make sure everything is up to date
	cd output/ && \
		git fetch origin && \
		git checkout gh-pages && \
		git reset --hard origin/gh-pages

	# Build the site
	$(PHIAL) app.py

	# Publish
	cd output/ && \
		git add -A && \
		git commit -m "publish" && \
		git push origin gh-pages

	# Update the submodule
	git add output
	git commit -m 'output substate'

env:
	virtualenv --prompt '(phial)' env

deps:
	pip install PyYAML pystache docutils pygments
