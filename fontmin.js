const Fontmin = require("fontmin");
const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "/fontmin/index.txt"),
  "utf-8",
  function (err, data) {
    const fontmin = new Fontmin()
      .src(path.join(__dirname, "fontmin/*.ttf"))
      .dest(path.join(__dirname, "fontmin/fonts"))
      .use(
        Fontmin.glyph({
          text: data,
          hinting: false, // keep ttf hint info (fpgm, prep, cvt). default = true
        })
      );

    fontmin.run(function (err, files) {
      if (err) {
        throw err;
      }

      console.log(files[0]);
      // => { contents: <Buffer 00 01 00 ...> }
    });
  }
);
