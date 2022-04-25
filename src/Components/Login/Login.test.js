import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Login from "../Login/Login";

describe("renders Login page", () => {
  //email...
  test("renders Email in Login", () => {
    render(<Login />);
    const EmailElement = screen.getByTestId("test@mail.com");
    expect(EmailElement).toBeInTheDocument();
  });
  //password
  test("renders Password in Login", async () => {
    render(<Login />);

    const passwordField = screen.getByPlaceholderText("Enter Password");
    expect(passwordField).toBeVisible();
  });

  //Button..
  test('renders "Your login Here" button clicked', () => {
    //Arange
    render(<Login />);
    //Assert
    const outputElement = screen.queryByText("Login Here");
    expect(outputElement).toBeInTheDocument();
  });
});
