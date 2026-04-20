const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/studentDB");

const Student = mongoose.model("Student", {
  name: String,
  age: Number,
  locality: String,
  course: String,
  academicYear: String,
  collegeName: {
    type: String,
    default: "SS College of Engineering"
  }
});

app.post("/students/add", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send(student);
});

app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

app.listen(5000, () => console.log("Backend running"));
