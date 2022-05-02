const dbConfig = require("../config/db.config.js");
const mysql = require("mysql2");
const db = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT,
});

/*
const read_query = async (query) => {
  // function for select tasks on db
  let results;
  db.query(query, (err, rows, fields) => {
    if (err) throw err;
    results = rows;
    // console.log("The query is: ", query);
    console.log("The result is: ", rows);
  });
  return results;
};
*/

const atomic_query = async (query) => {
  // function for create update delete tasks on database
  db.beginTransaction();
  try {
    db.query(query, (err, rows, fields) => {
      if (err) {
        console.log("Error in query, Rolling back!");
        db.rollback();
      }
      db.commit();
    });
  } catch (error) {
    console.log("Error in transaction, Rolling back!");
    db.rollback();
  }
};

module.exports = {
  db,
  atomic_query,
};
