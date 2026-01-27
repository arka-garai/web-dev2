const personArray = ["arka", "raman", "mikasa"];
const genderArray = ["male", "male", "female"];


for (let i = 0; i < personArray.length; i++) {
  if (genderArray[i] == "male") console.log(personArray[i]);
}

//better approach is to use Object

//objects are a way to aggregate data together similar to arrays
const users1 = {
  firstName: "arka",
  gender: "male",
};
console.log("\nTest : " + users1["firstName"]);

const allUsers = [{
  firstName: "kageyama",
  gender: "male",
}, users1, {
  firstName: "Annie",
  gender: "female",
}];

const numberOfUsers = allUsers.length;

console.log("\n \n")

for (let i = 0; i < numberOfUsers; i++) {
  if (allUsers[i]["gender"] == "male")
    console.log(allUsers[i]["firstName"]);
}

