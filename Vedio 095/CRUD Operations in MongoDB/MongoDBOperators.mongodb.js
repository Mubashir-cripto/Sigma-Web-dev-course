use("MongoDBOperators")

db.createCollection("courses")

 db.courses.insertOne({
    name : "Harry Web dev free course",
    price : 0,
    assignment : 12,
    projects : 45
})

db.courses.insertMany(
[
  {
    name: "Harry Web Dev Free Course",
    price: 0,
    assignment: 12,
    projects: 45
  },
  {
    name: "Python for Beginners",
    price: 0,
    assignment: 8,
    projects: 20
  },
  {
    name: "JavaScript Mastery",
    price: 2999,
    assignment: 15,
    projects: 30
  },
  {
    name: "React Complete Guide",
    price: 4999,
    assignment: 20,
    projects: 10
  },
  {
    name: "Node.js Backend Course",
    price: 3999,
    assignment: 18,
    projects: 25
  },
  {
    name: "MongoDB Bootcamp",
    price: 1999,
    assignment: 10,
    projects: 15
  },
  {
    name: "CSS & Tailwind Crash Course",
    price: 0,
    assignment: 5,
    projects: 12
  },
  {
    name: "Full Stack Web Development",
    price: 7999,
    assignment: 30,
    projects: 50
  },
  {
    name: "TypeScript for Beginners",
    price: 2499,
    assignment: 14,
    projects: 18
  },
  {
    name: "Next.js Advanced Course",
    price: 5999,
    assignment: 22,
    projects: 35
  }
]
)

// Comparison Operators (used in find())
// Equal to
// db.courses.find({price : {$eq : 0}})

// Not Equal to
// db.courses.find({price : {$ne :0 } })

// Greater than
// db.courses.find({price : {$gt : 3000}})

// Greater than or equal
// db.courses.find({price : {$gte : 2999}})

// Less than
// db.courses.find({price : {$lt : 2999}})

// Less than or equal
// db.courses.find({price : {$lte : 2999}})

// Logical Operators

// $and  |  All conditions must match
// db.courses.find({$and : [{price : {$gt : 100}} ,{assignment : {$gt : 10}}]})

// $or   |  At least one condition must match
// db.courses.find({ $or: [{ price: 0 }, { name: "Java" }] })

// $not  |  Condition must NOT match
// db.courses.find({ price: { $not: { $eq: 0 } } })

// $nor  |  None of the conditions match
// db.courses.find({ $nor: [{ price: 0 }, { name: "Java" }] })

// Increase price by 500
db.courses.updateOne({ name: "Java" }, { $inc: { price: 500 } })

// Multiply price by 2
db.courses.updateOne({ name: "Java" }, { $mul: { price: 2 } })


// $exists  :Check if a field exists
// $type    :Check the type of a field
// Find documents that HAVE a projects field
db.courses.find({ projects: { $exists: true } })