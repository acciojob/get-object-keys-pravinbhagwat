//your JS code here. If required.
const student = {
  name: 'John Doe'
};

Object.prototype.getKeys = function() {
  // Return an array of all the keys in the object
  return Object.keys(this);
};

console.log(student.getKeys());