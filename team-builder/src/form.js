import React, { useState } from "react";

function Form(props) {
  const [user, setUser] = useState({ name: "", email: "", role: "" });

  const newUser = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  //handle submit
  const handleSubmit = event => {
    event.preventDefault();
    props.setTeam(prev => [...prev, user]);
    setUser({ name: "", email: "", role: "" });
  };

  return (
    <div>
      {/* {console.log(user)} */}

      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name: <input name="name" onChange={newUser} type="text" />
        </label>
        <br />
        <label>
          Email: <input name="email" onChange={newUser} type="email" required />
        </label>
        <br />
        <label>
          Role:{" "}
          <select id="role" name="role" onChange={newUser}>
            <option />
            <option>nerd</option>
            <option>geek</option>
            <option>whatever</option>
          </select>
        </label>
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

export default Form;
