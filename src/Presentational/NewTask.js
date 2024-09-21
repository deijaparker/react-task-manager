import React from "react";

export default function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="New Task"
        value={newTask.title || ""}
        onChange={handleChange}
      />
      {newTask.title ? (
        <>
          <textarea
            name="description"
            placeholder="Task details..."
            value={newTask.description || ""}
            onChange={handleChange}
          />
          <button type="submit">Add Task</button>
        </>
      ) : null}
    </form>
  );
}
