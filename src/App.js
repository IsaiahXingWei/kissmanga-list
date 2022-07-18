import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import React, { useState } from "react";

function App() {
  const [title, settitle] = useState([]);

  const getTitle = () => {
    Axios.get("https://api.jikan.moe/v4/manga/1/full").then((response) => {
      console.log(response.data);
      settitle(response?.data);
    });
  };
  return (
    <div className="App">
      <h1> trying something out </h1>
      <button onClick={getTitle}> Fetch that!</button>

      {/* {title.map((title) => {
        return <p>{title.themes.title_english}</p>;
      })} */}
    </div>
  );
}

export default App;
