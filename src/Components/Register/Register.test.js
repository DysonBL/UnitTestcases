/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import Register from "../Register/Register";

describe("renders Register page", () => {
  const onChangeValue = {
    Fname: "",
    Sname: "",
    Email: "",
    Npsw: "",
    Cpsw: "",
  };
  test("test-input empty value", () => {
    const { getByTestId } = render(<Register />);
    // Assert
    expect(getByTestId("Fname").value).toBe("");
    expect(getByTestId("Sname").value).toBe("");
  });
  test("input change of First Name", () => {
    const changeInputValue = { ...onChangeValue, Fname: "Henry" };
    const { getByTestId } = render(<Register />);

    //Act
    fireEvent.change(getByTestId("Fname"), {
      target: { value: "Henry" },
    });

    expect(getByTestId("Fname").value).toBe("Henry");
  });
  test("input change of Second Name", () => {
    const changeInputValue = { ...onChangeValue, Sname: "Dyson" };
    const { getByTestId } = render(<Register />);

    //Act
    fireEvent.change(getByTestId("Sname"), {
      target: { value: "Dyson" },
    });
    // Assert
    expect(getByTestId("Sname").value).toBe("Dyson");
  });

  test("register Email and password", () => {
    const changeInputValue = { ...onChangeValue, Email: "", Cpasw: "" };

    const { getByPlaceholderText } = render(<Register />);
    expect(getByPlaceholderText("Enter New Password")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter @gmail.com")).toBeInTheDocument();
  });

  //Button..
  test('renders "Your login Here" button not clicked', () => {
    //Arange
    render(<Register />);
    //Assert
    const outputElement = screen.queryByText("Your Register Here");
    expect(outputElement).toBeInTheDocument();
  });
});
