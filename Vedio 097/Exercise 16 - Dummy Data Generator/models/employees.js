import mongoose from "mongoose";

const employeesSchema = new mongoose.Schema({
  Name: {type: String ,required: true ,default: "Hey"},
  Salary: {type: Number, required: true ,default: 1000},
  Language: String,
  City: String,
  isManager: Boolean
});

const employees = mongoose.model('employees',employeesSchema);
export default employees