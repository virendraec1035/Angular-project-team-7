const Pool = require("pg").Pool;

// database connection
const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "vegdb",
  password: "Adavya@11$",
  port: 5432,
});

// database query to insert new record in the table
// request object can read data from HTTP request body
const postUsers = (req, res) => {
  const newPost = req.body;
  const fullName=newPost.fullName;
  const contactNo=newPost.contactNo;
  const email = newPost.email;
  const password = newPost.password;

  db.query(
    "INSERT INTO users(fullName, contactNo,email,  password) values($1, $2,$3,$4)",
    [fullName,contactNo,email, password],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(201).json({ message: "New User added" });
    }
  );
};

// module.exports will export object with function
module.exports = { postUsers };
