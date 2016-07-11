This is a thoroughly silly personal site.

The build process is also thoroughly silly. It uses three steps, each written in a different language:

1. The Python app creates package directories, where each package contains information on a single page on the site. So a single package directry will contain a HTML file, some LESS files that'll be inlined, and some JS files that'll also be inlined.
2. The Gulp/JS app crushes the package directories down into single pages by inline the CSS and JS and doing any other processing that strikes my fancy.
3. The Bash app just moves copies everything into its final resting spot, ready to be served.

So to build the site, just run `make deps build` (you can skip the deps part after the first run of course) then take a look in `build/collect-output` for the results! `make serve` is useful during development, as well as `make watch`. Happy hacking!
