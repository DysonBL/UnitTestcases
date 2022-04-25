import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import Apitest from "./Components/Apitest/Apitest";

describe("Apps components", () => {
  //Heading test
  test("resnders Learn in Unit testing", () => {
    render(<App />);
    const learnElement = screen.getByText("Learn in Unit testing");
    expect(learnElement).toBeInTheDocument();
  });

});
