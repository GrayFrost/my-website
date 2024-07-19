const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "/src/posts"); // 指定要遍历的目录路径

function readDirectoryRecursively(dirPath) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      readDirectoryRecursively(fullPath); // 递归遍历子目录
    } else {
      readFileContent(fullPath);
    }
  });
}

function readFileContent(filePath) {
  console.log('zzh path', filePath);
  fs.readFile(filePath, "utf-8", function (err, data) {
    if (err) {
      console.log("read error", err);
    } else {
      fs.appendFile(
        path.join(__dirname, "/fontmin/index.txt"),
        data,
        "utf-8",
        function (err) {
          console.log("write error", err);
        }
      );
    }
  });
}

readDirectoryRecursively(directoryPath);
