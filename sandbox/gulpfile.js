const gulp = require("gulp");
const path = require("path");
const foreach = require("gulp-foreach");
const concat = require("gulp-concat");
 
gulp.task("crush", function() {
    // A stream of all of our package descriptions
    const descriptionStream = gulp.src("./build/app-output/packages/*/description.json");

    const outputStream = descriptionStream.pipe(foreach(function(stream, file) {
        // Parse the description
        const raw = file.contents.toString("utf-8");
        const packageInfo = JSON.parse(raw);

        // Figure out the package's base path (the directory containing the package.json file)
        const basePath = path.dirname(file.path);

        // Grab all the package's CSS files it wants to inline and process them
        const relativeCssPaths = packageInfo["inline-css"] || [];
        const cssPaths = relativeCssPaths.map(function (relativePath) {
            return path.join(basePath, relativePath);
        });
        const cssStream = gulp.src(cssPaths).pipe(concat("all-css.css"));

        // Similarily, grab all the package's JS files it wants to inline and process them
        const relativeJsPaths = packageInfo["inline-js"] || [];
        const jsPaths = relativeJsPaths.map(function (relativePath) {
            return path.join(basePath, relativePath);
        });
        const jsStream = gulp.src(jsPaths).pipe(concat("all-js.js"));

        // Smash everything together into the template and do some aggregate processing on the
        // whole thing.
        const aggregateStream = gulp.src(path.join(basePath, packageInfo.template));

        return aggregateStream.pipe(concat(packageInfo.target));
    }));

    return outputStream.pipe(gulp.dest("./build/crush-output/"));
});
