import "@testing-library/jest-dom/extend-expect";
import { render,screen,waitFor } from "@testing-library/react";
import Apitest from "../Apitest/Apitest";


  //Api testing...
  test("renders Api response work", async () => {
    render(<Apitest />);
    await waitFor(() => {
      screen.getByText("george.edwards@reqres.in");
    });
  });