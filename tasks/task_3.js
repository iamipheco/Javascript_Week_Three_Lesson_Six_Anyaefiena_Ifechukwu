// Iterate over object properties
// Create an object with multiple properties.
// Use a loop (such as for...in) to iterate over the object properties.
// Perform an action on each property, such as logging its key and value to the console.

// Created an object with multiple properties.
const myPersonalInfo = {
  name: 'Ipheco Chris',
  age: 30,
  location: 'Awka',
  occupation: 'Web Developer'
}

// Used a loop for...in() loop to iterate over the object properties.
for (const info in myPersonalInfo) {
  console.log(`${info} : ${myPersonalInfo[info]}`) // Perform an action on each property, by logging its key and value to the console.
} // Output : name : Ipheco Chris
// age : 30
// location : Awka
// occupation : Web Developer
