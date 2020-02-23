import React from "react";

const Form = ({ handleForm }) => {
  return (
    <div>
      Form
      <form onSubmit={handleForm}>
        <input name="joe" type="text"></input>
      </form>
    </div>
  );
};

export default Form;
