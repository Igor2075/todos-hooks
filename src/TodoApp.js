import React from "react";
import useTodoState from "./hooks/useTodoState";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import uuid from "uuid/v4";

export default function TodoApp() {
	const initTodos = [{ id: uuid(), task: "Walk dog", completed: false }];
	const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
		initTodos
	);
	// const initTodos = [
	// 	{ id: uuid(), task: "Walk dog", completed: false },
	// 	{ id: uuid(), task: "Feed kids", completed: true },
	// 	{ id: uuid(), task: "Clean Darth", completed: false },
	// ];

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: "100vh",
				backgroundColor: "#fafafa",
			}}
			elevation={0}>
			<Appbar color="primary" position="static" style={{ heigth: "64px" }}>
				<Toolbar>
					<Typography color="inherit">TODOS WITH HOOKS</Typography>
				</Toolbar>
			</Appbar>
			<Grid container justify="center" style={{ marginTop: "1rem" }}>
				<Grid item xs={11} md={8} lg={4}>
					<TodoForm addTodo={addTodo} />
					<TodoList
						todos={todos}
						removeTodo={removeTodo}
						toggleTodo={toggleTodo}
						editTodo={editTodo}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
}
