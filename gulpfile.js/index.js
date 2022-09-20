const {src, dest, watch, series, parallel} = require("gulp");

//конфигурация
const path = require("./config/path");
const app = require("./config/app");

//плагины
const browserSync = require('browser-sync').create();

// tasks
const html = require("./task/html");
const clear = require("./task/clear");
const style = require("./task/style");
const script = require("./task/script");
const image = require("./task/image");
const font = require("./task/font");
const asset = require("./task/asset");


function server() {
    browserSync.init(app.server.browserSync);
}

function watcher() {
    watch(path.html.watch, html).on("all", browserSync.reload);
    watch(path.style.watch, style).on("all", browserSync.reload);
    watch(path.script.watch, script).on("all", browserSync.reload);
    watch(path.image.watch, image).on("all", browserSync.reload);
    watch(path.font.watch, font).on("all", browserSync.reload);
    watch(path.asset.watch, asset).on("all", browserSync.reload);
}


// общие
function otherVender() {
    return src("./_src/vendor/**/*")
        .pipe(dest('./dist/vendor'))
}

function otherSendmail() {
    return src([`./_src/composer.json`,
        `./_src/composer.lock`,
        `./_src/sendmail.php`])
        .pipe(dest('./dist'))
}


// задачи
exports.html = html;
exports.style = style;
exports.script = script;
exports.image = image;
exports.font = font;
exports.asset = asset;
exports.clear = clear;
exports.watcher = watcher;
exports.server = server;
exports.otherVender = otherVender;
exports.otherSendmail = otherSendmail;


const production = series(
    clear,
    parallel(html, style, script, image, font, asset),
    parallel(watcher, server),
);

const vendor = series(
    parallel(otherVender, otherSendmail),
);

const developer = series(
    clear,
    parallel(html, style, script, image, font, asset),
    parallel(watcher, server),
)


exports.default = app.isProd ? production : developer;