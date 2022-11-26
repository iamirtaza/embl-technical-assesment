import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Button } from "./Button";

describe("Button Component", () => {

	test("Primary Button Rendering", () => {
	render(<Button variant="primary">Primary button</Button>);
	const button = screen.getByTestId("button");
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Primary button");
		expect(button).toHaveProperty("className", "primary-button")
	})

	test("Secondary Button Rendering", () => {
	render(<Button variant="secondary">Secondary button</Button>);
	const button = screen.getByTestId("button");
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Secondary button");
		expect(button).toHaveProperty("className", "secondary-button")
	})
})
