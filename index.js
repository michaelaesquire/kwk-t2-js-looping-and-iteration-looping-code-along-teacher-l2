// Code your solutions in this file
function printBadges(nameList) {
  for (let age = 0; age < nameList.length; age++) {
    let idNum = age+2;
  console.log("Welcome " + nameList[age] +"! You are employee #" + idNum + ".");
  }
  return nameList;
}

//function tailsNeverFails() {


//  return Math.random() >= 0.5;
//}

/* function tailsNeverFails() {
  return Math.random() >= 0.5;
  let counter = 0;
}

while (tailsNeverFails()) {
  console.log("You got " + counter + " tails in a row!");
    counter++;
} */

function tailsNeverFails() {
  let counter = 0;
  while(Math.random() >= 0.5) {
      counter++;
  }
  let returnMessage = "You got " + counter + " tails in a row!";
  return returnMessage;
  console.log("You got " + counter + " tails in a row!");
}
