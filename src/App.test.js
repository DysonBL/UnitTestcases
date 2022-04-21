import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Apps components", () => {
  test("resnders Learn in Unit testing", () => {
    render(<App />);
    const learnElement = screen.getByText("Learn in Unit testing");
    expect(learnElement).toBeInTheDocument();
  });

  //form method test...
  test('renders "Your login Here" button not clicked', () => {
    //Arange
    render(<App />);
    //Assert
    const outputElement = screen.queryByText("Your login Here");
    expect(outputElement).toBeInTheDocument();
  });
  test("renders button was clicked", () => {
    //Arange
    render(<App />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //  //Assert
    const outputElement = screen.getByText("Learn in Unit testing");
    expect(outputElement).toBeInTheDocument();
  });
  //email...
  test("pass invalid email to test input value", () => {
    render(<App />);

    const inputElement = screen.getByTestId("email-input");
    userEvent.type(inputElement, "test@mail.com");

    expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    expect(inputElement).toHaveValue();
  });
});
