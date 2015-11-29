build: clean
	mkdir ./build/app-output ./build/crush-output ./build/collect-output

	@echo === Python app ===
	cd pythonapp/; python app.py

	@echo === Gulp app - crush ===
	cd gulpapp/; gulp crush

	@echo === Bash app - collect ===
	cd bashapp/; bash collect.sh

serve:
	@echo 'Serving at http://127.0.0.1:50191'
	cd ./build/collect-output; python -c 'import SimpleHTTPServer, SocketServer; SocketServer.TCPServer(("127.0.0.1", 50191), SimpleHTTPServer.SimpleHTTPRequestHandler).serve_forever()'

clean:
	rm -rf ./build/app-output ./build/crush-output ./build/collect-output
