import React from "react";

const Form = () => {
  const submitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form__container">
      <form onSubmit={submitHandle}>
        <input type="text" placeholder="enter your name" />
        <input type="email" placeholder="enter your email" />
        <textarea placeholder="message"></textarea>
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Form;
