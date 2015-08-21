var gulp = require('gulp');
var phpdox = require('gulp-phpdox');
var elixir = require('laravel-elixir');

/*
 |----------------------------------------------------------------
 | PHPDox Documentation Generator
 |----------------------------------------------------------------
 |
 | This task will trigger your PHPDox documentation to be
 | generated.
 |
 */

elixir.extend('phpdox', function(bin, options) {

    options = _.extend({
        clear: true, notify: true
    }, options);

    new elixir.Task('phpdox', function() {
       gulp.src('')
           .pipe(phpdox(bin, null, options))
           .pipe(new elixir.Notification('PHPDox Complete!'));
    });
});
