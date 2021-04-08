import React from "react";

function Form(props) {
  return (
    <form>
      <input
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
        placeholder="Enter first name..."
      />
      <input
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName} 
        placeholder="Enter last name..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;