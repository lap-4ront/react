import { useState } from "react";
import "./App.css";
import { Table } from "./Table";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(evt) => setQuery(evt.target.value)}
      />
      <Table data={[]} />
    </div>
  );
}

export default App;
