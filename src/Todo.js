import React from "react";
import Toggler from "./hooks/Toggler";
import EditTodoForm from "./EditTodoForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default function Todo({
  task,
  completed,
  removeTodo,
  id,
  toggleTodo,
  editTodo,
}) {
  const [isEditing, toggle] = Toggler(false);
  return (
    <>
      <ListItem>
        {isEditing ? (
          <EditTodoForm
            editTodo={editTodo}
            id={id}
            task={task}
            toggle={toggle}
          />
        ) : (
          <>
            <Checkbox
              checked={completed}
              tabIndex={-1}
              color="default"
              onClick={() => toggleTodo(id)}
            />
            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label="Edit" onClick={() => toggle()}>
                <Edit />
              </IconButton>
              <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </>
  );
}
