import express from "express";
import mongoose from "mongoose";
import employees from "./models/employees.js"

const app = express()
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/company').then(() => {
    console.log("Connected to company db")
}).catch((error) => {
    console.error('Connection failed:', err);
})

const names = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna', 'Neville', 'Ginny', 'Dobby', 'Sirius', 'Dumbledore'];
const languages = ['Python', 'JavaScript', 'Java', 'C++', 'Go', 'Rust', 'TypeScript', 'Ruby', 'Kotlin', 'Swift'];
const cities = ['New York', 'London', 'Tokyo', 'Berlin', 'Toronto', 'Dubai', 'Sydney', 'Paris', 'Karachi', 'Lahore'];
 
app.post("/generate", (req, res) => {
    employees.deleteMany({})
        .then(() => {
            const employeeData = Array.from({ length: 10 }, () => ({
                Name: names[Math.floor(Math.random() * names.length)],
                Salary: Math.floor(Math.random() * 90000000) + 10000000,
                Language: languages[Math.floor(Math.random() * languages.length)],
                City: cities[Math.floor(Math.random() * cities.length)],
                isManager: Math.random() > 0.5,
            }));
            return employees.insertMany(employeeData);
        })
        .then(() => {
            res.json({ success: true, message: '10 employees inserted!' });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, message: 'Something went wrong.' });
        });
})


app.get('/employees', (req, res) => {
  employees.find()
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ message: 'Error fetching employees' }));
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));