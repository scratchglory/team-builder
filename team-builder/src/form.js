import React, { useState } from "react";

function Form() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [user, setUser] = useState({ name: "", email: "" });

  // handle name
  const nameChanger = event => {
    setUser({ ...user, name: event.target.value });
  };

  // handle email
  const emailChanger = event => {
    setUser({ ...user, email: event.target.value });
  };

  //handle submit
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      {console.log(user)}

      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input onChange={event => nameChanger(event)} type="text" />
        </label>
        <label>
          Email:
          <input onChange={event => emailChanger(event)} type="text" />
        </label>

        <button>Submit!</button>
      </form>
    </div>
  );
}

export default Form;
