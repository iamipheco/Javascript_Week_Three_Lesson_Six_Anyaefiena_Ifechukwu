// Access and modify object properties
// Create an object with multiple properties.
// Use dot notation or bracket notation to access a specific property.
// Modify the property value using assignment.
// Log the object to the console to see the updated value.

// Created an objectof myPersonalInfo with multiple properties.
const myPersonalInfo = {
  name: 'Ipheco Chris',
  age: 30,
  location: 'Awka',
  occupation: 'Web Developer',
  religion: 'Christianity'
}

console.log(myPersonalInfo.occupation) // Used dot notation to access a specific property and  logged it to the console.
// Output : Web Developer

myPersonalInfo.occupation = 'App Developer' // Modified the property value using assignment to assign a new value to it.

console.log(myPersonalInfo) // logged the Object to the console.
// Output :
// {
//     name: 'Ipheco Chris',
//     age: 30,
//     location: 'Awka',
//     occupation: 'App Developer',
//     religion: 'Christianity'
//   }
