let mix = require('laravel-mix');
mix.sass('resources/scss/style.scss', 'css').copyDirectory('resources/img', 'public/img').options({
    processCssUrls: false
});
mix.js(['resources/js/userRegister.js', 'resources/js/authPopup.js'],'js/app.js');
