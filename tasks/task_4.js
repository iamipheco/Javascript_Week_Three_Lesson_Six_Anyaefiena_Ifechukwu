// Remove properties from an object
// Create an object with multiple properties.
// Use the delete keyword to remove a specific property from the object.
// Log the object to the console to see the updated properties.

// Created an object with multiple properties.
const myPersonalInfo = {
  name: 'Ipheco Chris',
  age: 30,
  location: 'Awka',
  occupation: 'Web Developer'
}

delete myPersonalInfo.location // Used the delete keyword to remove the location property from the object.
console.log(myPersonalInfo) // Logged the object to the console to see the updated properties.
// Output : { name: 'Ipheco Chris', age: 30, occupation: 'Web Developer' }
