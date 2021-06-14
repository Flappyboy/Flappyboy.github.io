const fs = require("fs");
const path = require("path")
const execSync = require('child_process').execSync;
execSync("npm run build")
execSync("cd dist && git init && git remote add origin git@gitee.com:jachly/app.git && git add . " +
  "&& git commit -m 'pages' && git push -f origin master:pages")
function deleteFolderRecursive(url) {
  var files = [];
  /**
   * 判断给定的路径是否存在
   */
  if (fs.existsSync(url)) {
    /**
     * 返回文件和子目录的数组
     */
    files = fs.readdirSync(url);
    files.forEach(function (file, index) {

      var curPath = path.join(url, file);
      /**
       * fs.statSync同步读取文件夹文件，如果是文件夹，在重复触发函数
       */
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);

      } else {
        fs.unlinkSync(curPath);
      }
    });
    /**
     * 清除文件夹
     */
    fs.rmdirSync(url);
  } else {
    console.log("给定的路径不存在，请给出正确的路径");
  }
}
deleteFolderRecursive("./dist/.git")
