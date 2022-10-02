import React from "react";
import "./Search.css";

function Search(props) {
  // console.log(props.input);
  const { input, setInput } = props;

  return (
    <div className="containerSearch">
      <h1 className="topic">เที่ยวไหนดี</h1>

      <div className="searchBox">
        <label htmlFor="search" className="searchLabel">ค้นหาที่เทียว</label>
        <input
          className="search"
          type="text"
          id="search"
          name="firstname"
          placeholder="หาที่เที่ยวแล้วไปกัน.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default Search;
