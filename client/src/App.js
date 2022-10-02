import "./App.css";
// import { DisplayBoard } from "./components/DisplayBoard";
// import Search from "./components/Search";
import { useState } from "react";
import TravelSearch from "./components/TravelSearch";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      {/* <Search input={input} setInput={setInput} />
      <DisplayBoard input={input} setInput={setInput} /> */}


      <TravelSearch />

      



    </div>
  );
}

export default App;
