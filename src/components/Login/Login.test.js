import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Given a AccessData component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a form with a textbox and an imput 'usernameAcess'", () => {
      const expectedText = "UserNameAccess";
      render(<Login />);

      const expectedForm = screen.getByRole("textbox", { id: expectedText });

      expect(expectedForm).toBeInTheDocument();
    });

    test("Then it should render a input button with the text 'submit'", () => {
      const expectedText = "Submit";
      render(<Login />);

      const expectedForm = screen.getByRole("button", { name: expectedText });

      expect(expectedForm).toBeInTheDocument();
    });
  });
});
