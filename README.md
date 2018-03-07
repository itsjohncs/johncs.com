This is the source code for [a thoroughly silly personal site](http://blog.johncs.com). I didn't design any of the code to be reusable by anyone else because [I just wanted to get this thing built](http://johncs.com/posts/building-websites.htm), but you're welcome to peruse the code anyways!

# Hacking

These are instructions for hacking on the site and performing various actions. They are designed primarily for my own use.

## Overall architecture

The build process is thoroughly silly, and clearly not designed for ease of onboarding. It uses three steps, each written in a different language:

1. The Python app creates package directories, where each package contains information on a single page on the site. So a single package directry will contain a HTML file, some LESS files that'll be inlined, and some JS files that'll also be inlined.
2. The Gulp/JS app crushes the package directories down into single pages by inline the CSS and JS and doing any other processing that strikes my fancy.
3. The Bash app just moves copies everything into its final resting spot, ready to be served.

## Essential tasks

### Installing dependencies

`make deps` should install all the dependencies you need except for one mentioned in the next section.

### Serving the site locally

Make sure [`entr` is installed](http://entrproject.org/), then there's two steps:

1. Run `make watch` in a shell. This'll watch for file changes and rebuild the site if they occur. Be warned that it may crash if files/directories are removed or added.
2. Run `make serve`, this'll actually serve the site locally. Check the top of the output for the port.

### Publishing changes to the site

1. Run `make ready-publish`.
2. Follow the instructions at the end of the output (you just need to push the repo it make somewhere).

### Adding a blog post

Go to `content/posts` and cargo cult your way to victory (it's about as easy as you'd expect).

### Adding a mini-project

Go to `content/mini_projects` and cargo cult your way through (like adding a blog post, this is pretty straightforward).
