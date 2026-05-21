import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/todos`);
      setTodos(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    try {
      const res = await axios.post(`${API_URL}/api/todos`, { title: newTitle });
      setTodos([...todos, res.data]);
      setNewTitle("");
    } catch (err) {
      console.error(err);
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      const res = await axios.put(`${API_URL}/api/todos/${id}`, {
        completed: !completed,
      });
      setTodos(todos.map((t) => (t._id === id ? res.data : t)));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/todos/${id}`);
      setTodos(todos.filter((t) => t._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form onSubmit={addTodo} className="add-form">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(todo._id, todo.completed)}>
              {todo.title}
            </span>
            <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;