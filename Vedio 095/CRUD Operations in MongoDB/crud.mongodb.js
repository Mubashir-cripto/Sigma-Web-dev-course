// CRUD Operations
use("CrudDB")


db.createCollection("courses")

// create 
// db.courses.insertOne({
//     name : "Harry Web dev free course",
//     price : 0,
//     assignment : 12,
//     projects : 45
// })

// db.courses.insertMany([
//   {
//     name: "Harry Web Dev Free Course",
//     price: 0,
//     assignment: 12,
//     projects: 45
//   },
//   {
//     name: "Python for Beginners",
//     price: 0,
//     assignment: 8,
//     projects: 20
//   },
//   {
//     name: "JavaScript Mastery",
//     price: 2999,
//     assignment: 15,
//     projects: 30
//   },
//   {
//     name: "React Complete Guide",
//     price: 4999,
//     assignment: 20,
//     projects: 10
//   },
//   {
//     name: "Node.js Backend Course",
//     price: 3999,
//     assignment: 18,
//     projects: 25
//   },
//   {
//     name: "MongoDB Bootcamp",
//     price: 1999,
//     assignment: 10,
//     projects: 15
//   },
//   {
//     name: "CSS & Tailwind Crash Course",
//     price: 0,
//     assignment: 5,
//     projects: 12
//   },
//   {
//     name: "Full Stack Web Development",
//     price: 7999,
//     assignment: 30,
//     projects: 50
//   },
//   {
//     name: "TypeScript for Beginners",
//     price: 2499,
//     assignment: 14,
//     projects: 18
//   },
//   {
//     name: "Next.js Advanced Course",
//     price: 5999,
//     assignment: 22,
//     projects: 35
//   }
// ])

// READ
// let a = db.courses.find({price : 0})
// console.log(a.toArray())

// let b = db.courses.findOne({price : 0})
// console.log(b)

// UPDATE
// db.courses.updateOne({price : 0 } ,{$set:{price : 100}})

// db.courses.updateMany({price : 0} ,{$set:{price : 999}})
// DELETE

db.courses.deleteOne({price : 100})

db.courses.deleteMany({price : 999})