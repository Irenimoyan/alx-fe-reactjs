// src/_tests_/TodoList.test.jsx

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/ToDoList";

describe("TodoList Component", () => {
  test("renders the TodoList component", () => {
    render(<TodoList />);
    // Check if the input or button is visible
    expect(screen.getByPlaceholderText(/add a new todo/i)).toBeInTheDocument();
    expect(screen.getByText(/add todo/i)).toBeInTheDocument();
  });

  test("adds a new todo when form is submitted", () => {
    render(<TodoList />);
    
    // Type in the input
    const input = screen.getByPlaceholderText(/add a new todo/i);
    fireEvent.change(input, { target: { value: "Learn React Testing" } });
    
    // Click the button
    fireEvent.click(screen.getByText(/add todo/i));
    
    // Check if the new todo appears
    expect(screen.getByText("Learn React Testing")).toBeInTheDocument();
  });
});
