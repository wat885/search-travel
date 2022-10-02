import "./DisplayBoard.css";
import { useEffect, useState } from "react";
import axios from "axios";

import CopyButton from "../img/🦆 icon _copy_.svg";

export const DisplayBoard = (props) => {
  const [displayBoard, setDisplayBoard] = useState([]);
  const { input, setInput } = props;

  // console.log(input);

  useEffect(() => {
    getData();
  }, [input]);

  const getData = async () => {
    // if (input !== "") {
    const response = await axios.get(
      `http://localhost:4001/trips?keywords=${input}`
    );
    setDisplayBoard(response.data.data);
    // }
  };

  return (
    <div className="container">
      {displayBoard.map((items) => {
        // console.log(items.tags.length);
        return (
          <section className="box-content" key={items.eid}>
            <div className="boxImg">
              <img className="mainImage" src={items.photos[0]} alt="Test" />
            </div>
            <div className="conntent">
              <h1>
                <a href={items.url}>{items.title}</a>
              </h1>
              <h2>{items.description}...</h2>
              <h3 className="link">
                <a href={items.url} target="_blank">
                  Read More
                </a>
              </h3>
              <div className="catergory">
                <h3>Tags</h3>
                {items.tags.map((tag, index) => {
                  // console.log("index", index);
                  // console.log(items.tags.length);
                  if (index == items.tags.length - 1) {
                    return (
                      <>
                        <span className="and">และ</span>
                        <a
                          className="tag"
                          target="_blank"
                          key={index}
                          onClick={() => {
                            if (input === "") {
                              console.log("ไม่ซ้ำ");
                              let newInput = tag;
                              setInput(newInput);
                            } else {
                              if (input.includes(tag)) {
                                console.log("ซ้ำ");
                              } else {
                                console.log("ไม่ซ้ำ");
    
                                let newInput = input + " " + tag;
                                setInput(newInput);
                              }
                            }
                          }}
                        >
                          {tag}
                        </a>
                      </>
                    );
                  }
                  return (
                    <a
                      className="tag"
                      target="_blank"
                      key={index}
                      onClick={() => {
                        if (input === "") {
                          console.log("ไม่ซ้ำ");
                          let newInput = tag;
                          setInput(newInput);
                        } else {
                          if (input.includes(tag)) {
                            console.log("ซ้ำ");
                          } else {
                            console.log("ไม่ซ้ำ");

                            let newInput = input + " " + tag;
                            setInput(newInput);
                          }
                        }
                      }}
                    >
                      {tag}
                    </a>
                  );
                })}
              </div>
              <div className="otherImg">
                <div className="groupSubImage">
                  {items.photos.map((photo, index) => {
                    if (index === 0) return;
                    return (
                      <img
                        className="subImage"
                        src={photo}
                        alt="Image"
                        key={index}
                      ></img>
                    );
                  })}
                </div>
                <div>
                  <img
                    src={CopyButton}
                    alt="copy"
                    className="copyButton"
                    onClick={() => navigator.clipboard.writeText(items.url)}
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
