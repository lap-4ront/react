import { useState } from "react";
import "./App.css";
import { Users } from "./users";

function App() {
  const [query, setQuery] = useState("");

  const filteredUsers = (users) =>
    users.filter((user) => user.first_name.toLowerCase().includes(query));

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(evt) => setQuery(evt.target.value)}
      />
      <ul className="list">
        {filteredUsers(Users).map((user) => (
          <li className="listItem" key={user.id}>
            {user.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
