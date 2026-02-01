const fs = require("fs");

const japaneseSong = `
君が好きだと叫びたい
明日を変えてみえるから
世界中が敵になっても
君を守り抜くから

君が好きだと叫びたい
勇気を踏んで鳴らすから
世界中が敵になっても
君を守り抜くから
`;

fs.writeFile("a.txt", japaneseSong, "utf-8", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("Japanese song written to a.txt successfully!");
  }
});
