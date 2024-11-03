import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

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
      await axios.put("http://localhost:8800/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <HeroSection
        title={"Update Book"}
        desc={
          "Update book by entering the book details in its corresponding fields."
        }
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

        <button className="button" onClick={handleClick}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Update;
