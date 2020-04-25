import useLocalStorageState from "./useLocalStorageState";
import uuid from "uuid/v4";

export default (initialTodos) => {
	const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
	return {
		todos,
		addTodo: (newTodoText) => {
			setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
		},

		removeTodo: (todoId) => {
			const updatedTodos = todos.filter((todo) => todo.id !== todoId);
			setTodos(updatedTodos);
		},

		toggleTodo: (todoID) => {
			const updatedTodos = todos.map((todo) =>
				todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
			);
			setTodos(updatedTodos);
		},

		editTodo: (todoID, newValue) => {
			const updatedTodos = todos.map((todo) =>
				todo.id === todoID ? { ...todo, task: newValue } : todo
			);
			setTodos(updatedTodos);
		},
	};
};
