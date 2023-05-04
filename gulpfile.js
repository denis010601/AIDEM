const {watch, series, parallel} = require('gulp');
const browerSync = require('browser-sync').create();
// Конфигурация
const path = require("./config/path.js");

//Задачи
const clear = require('./tasks/clear.js');
const pug = require('./tasks/pug.js');
const scss = require('./tasks/scss.js');
const img = require('./tasks/img.js');
const font = require('./tasks/font.js');

// server
const server = () => {
  browerSync.init({
    server: {
      baseDir: path.root
    }
  })
}
// Налюдатель
const watcher = () => {
  watch(path.pug.watch, pug).on("all", browerSync.reload);
  watch(path.scss.watch, scss).on("all", browerSync.reload);
  
}

exports.pug = pug;
exports.scss = scss;
exports.img = img;
exports.font = font;
//Сорка
exports.dev = series (
  clear,
  parallel(pug, scss, img, font),
  parallel(watcher, server)
);