const {src, dest} = require("gulp");

function other() {
    return src([`./_src/composer.json`,
        `./_src/composer.lock`,
        `./_src/sendmail.php`])
        .pipe(dest('./dist'))
        .pipe(src("./_src/vendor/**/*"))
        .pipe(dest('./dist/vendor'))
}

module.exports = other;