build: clean
	mkdir ./build/app-output ./build/crush-output ./build/collect-output

	@echo === Python app ===
	cd pythonapp/; python app.py

	@echo === Gulp app - crush ===
	cd gulpapp/; gulp crush

	@echo === Bash app - collect ===
	cd bashapp/; bash collect.sh

clean:
	rm -rf ./build/app-output ./build/crush-output ./build/collect-output
