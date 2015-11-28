build: clean
	PYTHONPATH=. python pythonapp/app.py ./build/app-output/
	gulp crush

clean:
	rm -r ./build/app-output ./build/crush-output
	mkdir ./build/app-output ./build/crush-output
