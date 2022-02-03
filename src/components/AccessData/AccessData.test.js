import { render, screen } from "@testing-library/react";
import AccessData from "./AccessData";

describe("Given a AccessData component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a form with a textbox and an imput 'username'", () => {
      const expectedText = "UserName";
      render(<AccessData />);

      const expectedForm = screen.getByRole("textbox", { name: expectedText });

      expect(expectedForm).toBeInTheDocument();
    });

    test("Then it should render a input button with the text 'submit'", () => {
      const expectedText = "Submit";
      render(<AccessData />);

      const expectedForm = screen.getByRole("button", { name: expectedText });

      expect(expectedForm).toBeInTheDocument();
    });
  });
});
