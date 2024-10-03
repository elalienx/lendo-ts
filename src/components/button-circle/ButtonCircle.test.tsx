// Node modules
import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import ButtonCircle from "./ButtonCircle";
import { useState } from "react";

test("Runs the function passed as a prop", () => {
  // Arrange
  // ButtonCircle doesn’t have a label, so we use “button-” followed by the icon name as its identifier.
  const icon = "plus";
  const accessibleLabel = "button-" + icon;
  const result = "Hello World!";

  function TestPage() {
    const [text, setText] = useState("");

    return (
      <div>
        <h1>Test Page</h1>
        <p>{text}</p>
        <ButtonCircle icon={icon} onClick={() => setText("Hello World!")} />
      </div>
    );
  }

  render(<TestPage />);

  // Act
  const button = screen.getByRole("button", { name: accessibleLabel });
  fireEvent.click(button);

  // Assert
  expect(screen.getByText(result)).toBeInTheDocument();
});
