const {src, dest} = require("gulp");
const path = require("../config/path");
const app = require("../config/app");

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const imageMin = require("gulp-imagemin");
const gulpIf = require("gulp-if");

function images() {
    return src(path.image.src)
        .pipe(plumber(notify.onError(app.image.plumber)))
        .pipe(newer(path.image.dist))
        .pipe(webp(app.image.webp))
        .pipe(dest(path.image.destSrc))
        .pipe(dest(path.image.dist))
        .pipe(src(path.image.src))
        .pipe(newer(path.image.dist))
        .pipe(gulpIf(app.isProd, imageMin(app.image.imageMin)))
        .pipe(dest(path.image.destSrc))
        .pipe(dest(path.image.dist))
}

module.exports = images;