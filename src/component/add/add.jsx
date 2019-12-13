import React, { useState } from "react";

function Add(props) {
  const [name, setName] = useState("");
  
   function handleSubmit(evt){
      evt.preventDefault();
      //alert(`Submitting Name ${name}`)\
      console.log(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
        { name }
      <input type="submit" value="Submit" />
    </form>
  );
}
  export default Add