import React from "react";

function Form({ handleSubmit, newTask, handleInputChange }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <label htmlFor="new-item">Add to the list</label>
      <input
        type="text"
        id="new-item"
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default Form;
