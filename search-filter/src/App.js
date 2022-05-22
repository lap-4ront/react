import "./App.css";
import { Users } from "./users";

function App() {
  return (
    <div className="App">
      <input type="text" palceholder="Search..." className="search" />
      <ul className="list">
        {Users.map((user) => (
          <li className="listItem">{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
