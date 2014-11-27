## Usage

This is a simple PHPDox wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile, like so:

```
var elixir = require('laravel-elixir');

require('laravel-elixir-phpdox');

elixir(function(mix) {
   mix.phpdox('phpdox', 'phpdox.xml.dist');
});
```

This will scan any PHP classes in your 'app' folder for changes, and trigger your PHPDox documentation generator.

## Additional Information

For more information please refer to the [PHPDox documentation](http://phpdox.de/).
