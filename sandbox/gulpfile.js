const concat = require("gulp-concat");
const foreach = require("gulp-foreach");
const gulp = require("gulp");
const inject = require("gulp-inject");
const path = require("path");
 
gulp.task("crush", function() {
    // A stream of all of our package descriptions
    const descriptionStream = gulp.src("./build/app-output/packages/*/description.json");

    const outputStream = descriptionStream.pipe(foreach(function(stream, file) {
        // Parse the description
        const raw = file.contents.toString("utf-8");
        const packageInfo = JSON.parse(raw);

        // Figure out the package's base path (the directory containing the package.json file)
        const basePath = path.dirname(file.path);

        // Grab all the package's CSS files it wants to inline and create a stream that processes
        // them.
        const relativeCssPaths = packageInfo["inline-css"] || [];
        const cssPaths = relativeCssPaths.map(function (relativePath) {
            return path.join(basePath, relativePath);
        });
        const cssStream = gulp.src(cssPaths).pipe(concat("all-css.css"));

        // Similarily, grab all the package's JS files it wants to inline and create a stream that
        // processes them.
        const relativeJsPaths = packageInfo["inline-js"] || [];
        const jsPaths = relativeJsPaths.map(function (relativePath) {
            return path.join(basePath, relativePath);
        });
        const jsStream = gulp.src(jsPaths).pipe(concat("all-js.js"));

        // Grab the template file and put it by itself into a new stream
        const templateStream = gulp.src(path.join(basePath, packageInfo.template));

        // Create a stream that injects our processed CSS and JS into the template file and yields
        // a single file with the name we want.
        const aggregateStream = templateStream
            .pipe(inject(cssStream, {
                starttag: "<!-- inject:head:css -->",
                transform: function (filePath, file) {
                    // return file contents as string 
                    return "<style>" + file.contents.toString("utf-8") + "</style>";
                }
            }))
            .pipe(inject(jsStream, {
                starttag: "<!-- inject:head:js -->",
                transform: function (filePath, file) {
                    // return file contents as string 
                    return "<script>" + file.contents.toString("utf-8") + "</script>";
                }
            }))
            .pipe(concat(packageInfo.target));

        return aggregateStream;
    }));

    return outputStream.pipe(gulp.dest("./build/crush-output/"));
});
