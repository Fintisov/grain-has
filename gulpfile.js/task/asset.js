const {src, dest} = require("gulp");
const path = require("../config/path");
const app = require("../config/app");

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const imageMin = require("gulp-imagemin");
const gulpIf = require("gulp-if");

function asset() {
    return src(`${path.asset.src}.{jpg,png,svg,gif,ico,webp}`)
        .pipe(plumber(notify.onError(app.asset.plumber)))
        .pipe(newer(path.asset.dist))
        .pipe(webp(app.asset.webp))
        .pipe(dest(path.asset.destSrc))
        .pipe(src(`${path.asset.src}.{jpg,png,svg,gif,ico,webp}`))
        .pipe(newer(path.asset.dist))
        .pipe(gulpIf(app.isProd, imageMin(app.asset.imageMin)))
        .pipe(dest(path.asset.destSrc))
        .pipe(src(path.asset.src))
        .pipe(dest(path.asset.dist))
}

module.exports = asset;