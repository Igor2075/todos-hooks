import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function TodoApp() {
  const initTodos = [
    { id: 1, task: "Walk dog", completed: false },
    { id: 2, task: "Feed kids", completed: true },
    { id: 3, task: "Clean Darth", completed: false },
  ];
  const [todos, setTodos] = useState(initTodos);
  const addTodo = (newTodoText) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, task: newTodoText, completed: false },
    ]);
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <Appbar color="primary" position="static" style={{ heigth: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </Appbar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  );
}
