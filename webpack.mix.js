let mix = require('laravel-mix');
// mix.js('src/app.js', 'dist').setPublicPath('dist');
/*mix.sass('resources/assets/scss/style.scss', 'test').options({
    processCssUrls: false
});*/
mix.sass('resources/scss/style.scss', 'css').copyDirectory('resources/img', 'public/img').options({
    processCssUrls: false
});
mix.js(['resources/js/loginPopup.js'],'js/app.js');
