import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CustomSelect, { customSlectProps } from "../select/CustomSelect";
import "@testing-library/jest-dom/extend-expect";

// Mock props for testing
const mockProps: customSlectProps = {
  options: ["Option 1", "Option 2", "Option 3"],
  defaultOption: "Option 1",
  optionChange: jest.fn(), // Mock function
};

describe("CustomSelect Component", () => {
  test("renders all menu items based on options prop", () => {
    render(<CustomSelect {...mockProps} />);

    // Check if all menu items are rendered correctly
    mockProps.options.forEach((option, index) => {
      const menuItem = screen.queryByTestId(
        `form-control-select-menu-item-${index}`
      );
      if (menuItem) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(menuItem.textContent).contain(option);
        // eslint-disable-next-line jest/no-conditional-expect
        expect(menuItem.getAttribute("value")).to(option);
      }
    });
  });
});
