import React from "react";
import "./TravelSearch.css";
import { useState, useEffect } from "react";
import axios from "axios";

function TravelSearch() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [input]);

  const getData = async () => {
    const response = await axios.get(
      "http://localhost:4001/trips?keywords=" + input
    );
    // console.log(response.data.data);
    setData(response.data.data);
  };

  // console.log(data);
  // console.log(input);

  const handleAdd = (value) => {
    if (input === "") setInput(value);
    else setInput(input + " " + value);
  };

  return (
    <div className="containerSearch">
      <h1 className="topic">เที่ยวไหนดี</h1>

      <div className="searchBox">
        <label htmlFor="search" className="searchLabel">
          ค้นหาที่เทียว
        </label>
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

      <div className="items-content">
        {data.map((item, index) => {
          return (
            <div className="item" key={index}>
              <div>
                <img src={item.photos[0]} className="left-img" />
              </div>

              <div className="content">
                <h2 className="location-name">{item.title}</h2>
                <p className="description">{item.description}F</p>
                <a href={item.url} className="read-more">
                  อ่านต่อ
                </a>
                <div className="group-tags">
                  <span>หมวด</span>
                  {item.tags.map((t, index) => {
                    return index === item.tags.length - 1 ? (
                      <>
                        <span>และ</span>
                        <span
                          className="tag"
                          key={index}
                          onClick={() => {
                            handleAdd(t);
                          }}
                        >
                          {t}{" "}
                        </span>
                      </>
                    ) : (
                      <span
                        className="tag"
                        key={index}
                        onClick={() => {
                          handleAdd(t);
                        }}
                      >
                        {t}{" "}
                      </span>
                    );
                  })}
                </div>
                <div className="groupImg">
                  {item.photos.map((img, index) => {
                    // if (index === 0) return null;
                    // else return <img src={img} key={index} />;

                    return index === 0 ? null : <img src={img} key={index} />;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TravelSearch;
