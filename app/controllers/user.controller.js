const { db, atomic_query } = require("../services/database.js");

const createNewUser = async (req, res) => {
  const query = `insert into users (userId, uKey, uname, email) values ('sanaa', 'QW23NSHB342IJ4323NEOBJH', 'Mazar Ahmed', 'mazar@gmail.com')`;
  let ans = await atomic_query(query);
  res.json({ message: "success" });
};

const getUsersDetails = async (req, res) => {
  const query = `select * from users`;
  db.query(query, (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
    // console.log("The query is: ", query);
    // console.log("The result is: ", rows);
  });
};

module.exports = {
  createNewUser,
  getUsersDetails,
};
