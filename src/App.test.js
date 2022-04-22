import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Apitest from "./Components/Apitest";

describe("Apps components", () => {
  test("resnders Learn in Unit testing", () => {
    render(<App />);
    const learnElement = screen.getByText("Learn in Unit testing");
    expect(learnElement).toBeInTheDocument();
  });

  //form method test...

  test("entering a username", () => {
    render(<Apitest />);
  });

  //email...
  test("renders Enter the Email value", () => {
    render(<App />);
    //Act
    const inputElement = screen.getByTestId("email-input");
    userEvent.type(inputElement, "test@mail.com");
    //Assert
    const Inputvalidelement = screen.queryByTestId("email-input");
    expect(Inputvalidelement).toHaveValue("test@mail.com");
    const errelement = screen.queryByTestId("error-msg");
    expect(errelement).not.toBeInTheDocument();
  });
  test('renders error in email',()=>{
    render(<Apitest/>);

    const inputElement = screen.getByTestId("email-input");
    userEvent.type(inputElement, "test@mail.com");
    const errelement=screen.queryByTestId("error-msg")
    expect(errelement).toBeInTheDocument();
    const errtextelement =screen.getByText('Enter the Correct Mail..');
    expect(errtextelement).toBeInTheDocument();

  })
  //Button..
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
  //Api testing...
  test("renders Api response work", async () => {
    render(<Apitest />);
    await waitFor(() => {
      screen.getByText("george.edwards@reqres.in");
    });
  });
  test("renders Api response works good", async () => {
    render(<Apitest />);
  });
});
