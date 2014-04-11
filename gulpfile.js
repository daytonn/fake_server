var gulp = require("gulp");
var gutil = require("gulp-util");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var connect = require('connect');

gulp.task("server", function() {
  connect.createServer(connect.static(".") ).listen(3000);
});

gulp.task("default", ["server"]);
