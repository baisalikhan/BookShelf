import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "test",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello from backend");
});

app.get("/books", (req, res) => {
  const query = "SELECT * FROM books";
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const query =
    "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(query, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("Book has been created successfully");
  });
});

app.listen(8800, () => {
  console.log("Connected to backend");
});
