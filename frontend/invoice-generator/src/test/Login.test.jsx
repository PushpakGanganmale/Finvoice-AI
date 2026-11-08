import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/Auth/Login.jsx";
import * as Auth from "../context/AuthContext";

jest.mock("../context/AuthContext", () => ({
  useAuth: jest.fn(),
}));

test("Login has email, password and submit button", () => {
  Auth.useAuth.mockReturnValue({
    isAuthenticated: false,
    user: null,
    login: jest.fn(),
    logout: jest.fn(),
  });

  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const email =
    screen.queryByLabelText(/email/i) ||
    screen.queryByPlaceholderText(/email/i);
  const password =
    screen.queryByLabelText(/password/i) ||
    screen.queryByPlaceholderText(/password/i);
  const submit =
    screen.queryByRole("button", { name: /log in|login|sign in/i });

  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(submit).toBeInTheDocument();
});
