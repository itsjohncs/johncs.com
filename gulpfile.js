var gulp = require("gulp");
var shell = require("gulp-shell");
var foreach = require("gulp-foreach");
var inject = require("gulp-inject");
var concat = require("gulp-concat");
var minifyCss = require("gulp-minify-css");
var minifyHTML = require("gulp-minify-html");
var imagemin = require("gulp-imagemin");
var webserver = require("gulp-webserver");

gulp.task("phial", shell.task([
    "rm -rf /tmp/johncs-phial",
    "PYTHONPATH=./phial python -m phial.__main__ --output /tmp/johncs-phial -v ./app.py",
]));

function inline_css(html_glob, page_css_glob, output_dir) {
    gulp.src(html_glob)
        .pipe(foreach(function(stream, file){
            // Gather all of the CSS we want to inline in this post
            var css = (gulp
                .src([page_css_glob, "bower_components/normalize.css", "styles/common.css",
                      "styles/pygments.css"])
                .pipe(concat("all.css")))
                .pipe(minifyCss());

            return stream
                .pipe(inject(css, {
                    starttag: "<!-- inject:head:css -->",
                    transform: function (filePath, file) {
                        // return file contents as string 
                        return "<style>" + file.contents.toString("utf8") + "</style>";
                    }
                }));
        }))
        .pipe(minifyHTML({comments: true, loose: true}))
        .pipe(gulp.dest(output_dir));
}

gulp.task("processed-pages", ["phial"], function() {
    inline_css("/tmp/johncs-phial/posts/*", "styles/post-page.css", "output/posts/");
    inline_css("/tmp/johncs-phial/index.htm", "styles/main-page.css", "output/");
    gulp.src("/tmp/johncs-phial/rss.xml").pipe(gulp.dest("output"));
});

gulp.task("images", function() {
    gulp.src("images/*")
        .pipe(imagemin({optimizationLevel: 5, progressive: true}))
        .pipe(gulp.dest("output/images"))
});

gulp.task("default", ["processed-pages", "images"], function() {});

gulp.task("serve", ["default"], function() {
    gulp.src("output")
        .pipe(webserver({
            livereload: true,
            open: "index.htm"
        }));

    gulp.watch(["app.py", "index.htm", "rss.xml", "posts/*", "styles/*"], ["processed-pages"]);
    gulp.watch("images/*", ["images"]);
});