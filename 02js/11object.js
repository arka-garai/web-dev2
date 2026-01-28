let obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(obj.hasOwnProperty("key2"));
console.log(obj.hasOwnProperty("lol"));
let newObj = Object.assign({}, obj, { newProperty: "newValue" });
console.log(newObj);
console.log(typeof newObj);

