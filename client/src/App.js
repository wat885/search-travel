import "./App.css";

import { useState,useEffect } from "react";
import TravelSearch from "./components/TravelSearch";

function App() {

  useEffect(() => {
    document.title = 'เที่ยวไหนดี';
  });


  return (
    <div className="App">
      <TravelSearch />
    </div>
  );
}

export default App;
