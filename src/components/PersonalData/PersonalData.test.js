import { render, screen } from "@testing-library/react";
import PersonalData from "./PersonalData";

describe("Given a PersonalData component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a form with a textbox and an imput 'first name'", () => {
      const expectedText = "First name";
      render(<PersonalData />);

      const expectedForm = screen.getByRole("textbox", { name: expectedText });

      expect(expectedForm).toBeInTheDocument();
    });

    test("Then it should render a input button with the text 'submit'", () => {
      const expectedText = "Submit";
      render(<PersonalData />);

      const expectedForm = screen.getByRole("button", { name: expectedText });

      expect(expectedForm).toBeInTheDocument();
    });
  });
});
