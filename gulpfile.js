var concat = require("gulp-concat");
var foreach = require("gulp-foreach");
var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var inject = require("gulp-inject");
var minifyCss = require("gulp-minify-css");
var minifyHTML = require("gulp-minify-html");
var minifyInline = require("gulp-minify-inline");
var shell = require("gulp-shell");
// var uncss = require('gulp-uncss');
var webserver = require("gulp-webserver");
var less = require("gulp-less");

gulp.task("phial", shell.task([
    "rm -rf /tmp/johncs-phial",
    "PYTHONPATH=./phial python -m phial.__main__ --output /tmp/johncs-phial -v ./app.py",
]));

function inline_css(html_glob, page_less_glob, output_dir) {
    return gulp.src(html_glob)
        .pipe(foreach(function(stream, file){
            // Gather all of the CSS we want to inline in this post
            var css = (gulp
                .src([page_less_glob, "bower_components/normalize.css",
                      "styles/pygments.css"])
                .pipe(concat("all.less")))
                .pipe(less())
                // .pipe(uncss({
                //     html: file.contents.toString("utf8")
                // }))
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
        .pipe(minifyInline({css: false}))
        .pipe(gulp.dest(output_dir));
}

gulp.task("processed-pages", ["phial"], function() {
    inline_css("/tmp/johncs-phial/posts/*", "styles/post-page.less", "output/posts/");
    inline_css("/tmp/johncs-phial/index.htm", "styles/main-page.less", "output/");
    gulp.src("/tmp/johncs-phial/rss.xml").pipe(gulp.dest("output"));
});

gulp.task("images", function() {
    return gulp.src("images/*")
        .pipe(imagemin({optimizationLevel: 5, progressive: true}))
        .pipe(gulp.dest("output/images"))
});

gulp.task("default", ["processed-pages", "images"], function() {});

gulp.task("serve", ["default"], function() {
    gulp.watch(["app.py", "index.htm", "rss.xml", "posts/*", "styles/*"], ["processed-pages"]);
    gulp.watch("images/*", ["images"]);

    return gulp.src("output")
        .pipe(webserver({
            livereload: true,
            open: "index.htm"
        }));
});
