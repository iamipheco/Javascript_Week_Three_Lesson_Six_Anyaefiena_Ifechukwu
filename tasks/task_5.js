// Merge objects
// Create multiple objects with different properties.
// Use the Object.assign() method to merge the objects into a single object.
// Log the merged object to the console.

// Created multiple objects with different properties, which is myPersonalInfo and myXtraPersonalInfo
const myPersonalInfo = {
  fullname: 'Anyaefiena Ifechukwu',
  age: 30,
  Emai: 'iamipheco@gmail.com'
}

const myXtraPersonalInfo = {
  nickname: 'Ipheco',
  mylocation: 'Awka',
  occupation: 'Web Developer'
}

// Used the Object.assign() method to merge the objects into a single object.
const myfullPersonalInfo = Object.assign(myPersonalInfo, myXtraPersonalInfo)

// Log the merged object to the console.
console.log(myfullPersonalInfo) // Output : {
//     fullname: 'Anyaefiena Ifechukwu',
//     age: 30,
//     Emai: 'iamipheco@gmail.com',
//     nickname: 'Ipheco',
//     mylocation: 'Awka',
//     occupation: 'Web Developer'
//   }
