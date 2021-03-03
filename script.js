const age = 18;
const isFemale = true;
const driverStatus = "bob";

if (age >= 18) {
  console.log("Loop maar door naar binnen");
} else {
  console.log("Je bent te jong, je mag niet naar binnen");
}

if (isFemale) {
  console.log("Je bent een vrouw, loop maar door naar binnen");
} else {
  console.log("Het is ladies night, je mag helaas niet naar binnen");
}

if (driverStatus === "bob") {
  console.log("Hier heb je een cassis. Je mag rijden.");
} else {
  console.log("Hier heb je een biertje. Je mag niet rijden.");
}
