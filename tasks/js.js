const {src, dest} = require('gulp');

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");




//ПЛагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');



// обработка pug
const js = ()  => {
  return src(path.js.src)
  .pipe(dest(path.js.dest))

}


module.exports = js;