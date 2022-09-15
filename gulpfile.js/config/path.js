const pathSrc = "./_src";
const pathDist = "./dist"

const path = {
    root: pathDist,

    html: {
        src: [`${pathSrc}/pages/*.html`,
            `!${pathSrc}/pages/_head.html`,
            `!${pathSrc}/pages/_script.html`
        ],
        watch: `${pathSrc}/pages/**/*.html`,
        dist: `${pathDist}`
    },

    style: {
        src: `${pathSrc}/styles/style.{scss,sass}`,
        watch: `${pathSrc}/styles/**/*.{sass,scss}`,
        destSrc: `${pathSrc}/styles`,
        dist: `${pathDist}/styles`,
    },

    script: {
        src: `${pathSrc}/scripts/script.js`,
        watch: `${pathSrc}/scripts/**/*.js`,
        dist: `${pathDist}/scripts`,
    },

    image: {
        src: `${pathSrc}/images/**/*.{jpg,png,svg,gif,ico,webp}`,
        watch: `${pathSrc}/images/**/*.{jpg,png,svg,gif,ico,webp}`,
        destSrc: `${pathSrc}/images`,
        dist: `${pathDist}/images`,
    },

    asset: {
        src: `${pathSrc}/assets/**/*`,
        watch: `${pathSrc}/assets/**/*`,
        destSrc: `${pathSrc}/assets`,
        dist: `${pathDist}/assets`,
    },

    font: {
        src: `${pathSrc}/fonts/**/*`,
        watch: `${pathSrc}/fonts/**/*`,
        dist: `${pathDist}/fonts`,
    },

    webpack: {
        entry: `${pathSrc}/scripts/script.js`
    },

    server: {
        baseDir: [`${pathDist}/pages`, pathDist],
    }
}

module.exports = path;