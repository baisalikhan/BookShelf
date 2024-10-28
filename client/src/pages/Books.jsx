import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        // const res = await fetch("http://localhost:8800/books");
        // const data = await res.json();
        // setBooks(data);
        const res = await axios.get("http://localhost:8800/books");
        console.log("line 13: ", res.data);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <div>
      <h1>Bais Book Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
          </div>
        ))}
        <button>
          <Link to="/add">Add new book</Link>
        </button>
      </div>
    </div>
  );
};

export default Books;
