import { render, screen } from "@testing-library/react";
import UserDataContext from "../../contexts/UserDataContext";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a input button with the text 'submit'", () => {
      const expectedText = "Submit";
      const changeScreen = jest.fn();
      render(
        <UserDataContext.Provider value={changeScreen}>
          <Button />
        </UserDataContext.Provider>
      );
      const expectedForm = screen.getByRole("button", { name: expectedText });

      expect(expectedForm).toBeInTheDocument();
    });
  });
  // fail test
  describe("When it is clicked", () => {
    test("Then it should call an action on click", () => {
      const expectedFunction = jest.fn();
      render(
        <UserDataContext.Provider value={expectedFunction}>
          <Button />
        </UserDataContext.Provider>
      );
      userEvent.click();

      expect(expectedFunction).toBeCalled();
    });
  });
});
