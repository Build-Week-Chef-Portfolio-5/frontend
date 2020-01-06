import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");

  const handleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <div className="App">

      <form>
        <label>
          Email:
          <input 
            type="text" 
            onChange={event => handleChange(event)}
          />
        </label>
      </form>

      <form>
        <label>
          Password:
          <input type="text"/>
        </label>
      </form>

    </div>
  );
}

export default App;