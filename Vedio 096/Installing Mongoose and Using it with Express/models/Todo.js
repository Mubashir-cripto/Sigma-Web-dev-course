// Ap kis hisab se apna schema bnana chata ho

import mongoose, { Types } from "mongoose";
const TodoSchema = new mongoose.Schema({
  Title: {type: String ,required: true ,default: "Hey"},
  desc: String,
  isDone: Boolean,
  days: Number
});

export const Todo = mongoose.model('Todo',TodoSchema);