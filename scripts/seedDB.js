const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/studygrouplist"
);

const studieseed = [
  {
    name: "Jane Doe",
    subject: "English",
    location: "North Charlotte",
    email: "jd@gmail.com",
    content:
      "Need help with paper on Catcher in the Rye",
    date: new Date(Date.now())
  },
  {
    name: "Bob Jones",
    subject: "Math",
    location: "South Charlotte",
    email: "bigbobby@gmail.com",
    content:
      "Calculus is kicking my butt",
    date: new Date(Date.now())
  },
  {
    name: "Cindy Williams",
    subject: "Math",
    location: "South Charlotte",
    email: "cynth@gmail.com",
    content:
      "Anyone good in Algebra",
    date: new Date(Date.now())
  },
  {
    name: "Larry Faulkner",
    subject: "Science",
    location: "UNCC",
    email: "lfaulkner@yahoo.com",
    content:
      "Hating physics right now. Help me!",
    date: new Date(Date.now())
  },
  {
    name: "Perry Cole",
    subject: "History",
    location: "Ballantyne",
    email: "colep@yahoo.com",
    content:
      "American Revolution",
    date: new Date(Date.now())
  },
  {
    name: "Kathy Thompson",
    subject: "English",
    location: "Dilworth",
    email: "kathy.thompsonp@gmail.com",
    content:
      "",
    date: new Date(Date.now())
  },
  {
    name: "John Doe",
    subject: "Science",
    location: "East Charlotte",
    email: "lildoeboy@gmail.com",
    content:
      "Pre-Med, need biology tutor",
    date: new Date(Date.now())
  },
  {
    name: "Carl Roberts",
    subject: "Math",
    location: "NoDa",
    email: "carlroberts23@gmail.com",
    content:
      "I'm a math major if anyone needs assistance",
    date: new Date(Date.now())
  },
  {
    name: "Kevin Konnor",
    subject: "History",
    location: "South Charlotte",
    email: "kk123456@gmail.com",
    content:
      "Have to write a paper on the Civil War",
    date: new Date(Date.now())
  },
  {
    name: "Lucy Grant",
    subject: "Science",
    location: "Johnson C Smith",
    email: "lgrant12@gmail.com",
    content:
      "",
    date: new Date(Date.now())
  }
  
];

db.Study
  .remove({})
  .then(() => db.Study.collection.insertMany(studieseed))
  .then(data => {
    //console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
