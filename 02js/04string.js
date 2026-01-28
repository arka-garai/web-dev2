var str = "Arkaka";

console.log(str.length);
console.log(str.indexOf("ka"));
console.log(str.lastIndexOf("ka"));
console.log(str.slice(3, 5));

function cutIt(str, startIdx, endIdx) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= startIdx && i < endIdx) {
      newStr = newStr + str[i]
    }
  }
  return newStr;
}

const val = "Shoyo Hinata";
console.log(cutIt(val, 0, 5));

const intro = "hi! my name is arka garai";
console.log(intro.split(" "));

const fullName = "          Tobio kageyama             ";
console.log(fullName.trim());

console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());


