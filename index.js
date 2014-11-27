var elixir = require('laravel-elixir');
var gulp = require('gulp');
var phpdox = require('gulp-phpdox');
var notify = require('gulp-notify');
var _ = require('underscore');

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

    gulp.task('phpdox', function() {
       gulp.src('')
           .pipe(phpdox(bin, null, options))
           .pipe(notify({
               title: 'PHPDox Complete!',
               message: 'Your PHPDox documentation has been generated!',
               icon: __dirname + '/../laravel-elixir/icons/pass.png'
           }));
    });

    this.queueTask('phpdox');

});
