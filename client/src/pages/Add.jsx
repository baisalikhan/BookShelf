import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";

const Add = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* hero Section */}
      <HeroSection
        title="Add New Book"
        desc="Add new book by entering the book details in its corresponding fields."
        btnlabel={"back home"}
        btnAddress={"/"}
      />

      <div className="form_container">
        <input
          type="text"
          placeholder="title"
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          placeholder="desc"
          onChange={handleChange}
          name="desc"
        />
        <input
          type="number"
          placeholder="price"
          onChange={handleChange}
          name="price"
        />
        <input
          type="text"
          placeholder="cover"
          onChange={handleChange}
          name="cover"
        />

        <button className="formButton" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Add;
