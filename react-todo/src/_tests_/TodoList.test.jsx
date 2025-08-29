import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import "@testing-library/jest-dom";
import TodoList from "../components/ToDoList";

// --- Test 1: Initial Render ---
test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

// --- Test 2: Add Todo ---
test("adds a new todo", async () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo");
  const button = screen.getByText("Add");

  await userEvent.type(input, "Write tests");
  fireEvent.click(button);

  expect(screen.getByText("Write tests")).toBeInTheDocument();
});

// --- Test 3: Toggle Todo ---
test("toggles a todo between completed and not completed", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");

  // initially not completed
  expect(todo).not.toHaveStyle("text-decoration: line-through");

  fireEvent.click(todo); // toggle
  expect(todo).toHaveStyle("text-decoration: line-through");

  fireEvent.click(todo); // toggle back
  expect(todo).not.toHaveStyle("text-decoration: line-through");
});

// --- Test 4: Delete Todo ---
test("deletes a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  const deleteButton = screen.getAllByText("Delete")[0];

  fireEvent.click(deleteButton);

  expect(todo).not.toBeInTheDocument();
});
