import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        console.log("line 13: ", res.data);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* homePage_heroSection */}
      <div className="homePage_heroSection">
        <h1 className="homePage_title">Bais Book Shop</h1>
        <h5 className="homePage_desc">
          This is the description for "Bais Book Shop" Where you will get every
          kind and category of book on every discounted price
        </h5>
      </div>

      {/* Add new book */}
      <div className="addBook_container">
        <button className="addBook_button">
          <Link className="addHome" to="/add">
            New book
          </Link>
        </button>
      </div>

      {/* Books container */}
      <div className="books_container">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2 className="book_title">{book.title}</h2>
            <p className="book_desc">{book.desc}</p>
            <span>{book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              <Link to={`/update/${book.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
