
function log() {
  console.log("after 2 sec");
}
setTimeout(log, 2000);
console.log(__dirname);
