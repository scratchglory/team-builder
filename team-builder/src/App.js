import React, { useState } from "react";
import Form from "./form";

import "./App.css";

function App() {
  const [team, setTeam] = useState([]);

  return (
    <div className="App">
      <Form setTeam={setTeam} />
      <h1>List of Team</h1>
      {team.map(user => {
        return (
          <div className="member">
            <ul>
              <li>
                <h2>Name: {user.name}</h2>

                <h3>Email: {user.email} </h3>

                <h3>Role: {user.role}</h3>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
