
use('sigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
  {
    "name": "Java",
    "Price": 20000,
    "Instructor": "Harry"
  },
  {
    "name": "Python",
    "Price": 15000,
    "Instructor": "Sara"
  },
  {
    "name": "JavaScript",
    "Price": 18000,
    "Instructor": "Ali"
  },
  {
    "name": "C++",
    "Price": 12000,
    "Instructor": "Ahmed"
  },
  {
    "name": "React",
    "Price": 25000,
    "Instructor": "Usman"
  },
  {
    "name": "Node.js",
    "Price": 22000,
    "Instructor": "Zara"
  },
  {
    "name": "PHP",
    "Price": 10000,
    "Instructor": "Bilal"
  },
  {
    "name": "Flutter",
    "Price": 28000,
    "Instructor": "Hina"
  },
  {
    "name": "Django",
    "Price": 17000,
    "Instructor": "Omar"
  },
  {
    "name": "Machine Learning",
    "Price": 35000,
    "Instructor": "Ayesha"
  }
]);


// Print a message to the output window.
console.log(`Done inserting data`);