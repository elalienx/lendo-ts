// Node modules
import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import Button from "./Button";
import { useState } from "react";

test("Runs the function passed as a prop", () => {
  // Arrange
  const label = "Click me";
  const result = "Hello World!";

  function TestPage() {
    const [text, setText] = useState("");

    return (
      <div>
        <h1>Test Page</h1>
        <p>{text}</p>
        <Button icon={""} onClick={() => setText("Hello World!")}>
          {label}
        </Button>
      </div>
    );
  }

  render(<TestPage />);

  // Act
  const button = screen.getByRole("button", { name: label });
  fireEvent.click(button);

  // Assert
  expect(screen.getByText(result)).toBeInTheDocument();
});
