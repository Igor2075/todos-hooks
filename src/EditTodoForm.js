import React, { useContext } from "react";
import { DispatchContext } from "./context/todos.context";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";

function EditTodoForm({ id, task, toggleEditForm }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", newTask: value, id: id });
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditTodoForm;
