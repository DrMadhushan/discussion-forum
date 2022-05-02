const db = require("../services/database.js");

// Create new question
const newQuestion = async (req, res) => {};
// Star a question (like bookmark)
const starQuestion = (req, res) => {};
// Search for questions related to a text passed
const searchQuestion = (req, res) => {};
// Edit the question posted
const editQuestion = (req, res) => {};
// Get top questions in the forum
const getTopQuestions = (req, res) => {
  const query = `select * from questions;`;
  db.query(query, (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
    // console.log("The query is: ", query);
    // console.log("The result is: ", rows);
  });
};

module.exports = {
  newQuestion,
  starQuestion,
  searchQuestion,
  editQuestion,
};
