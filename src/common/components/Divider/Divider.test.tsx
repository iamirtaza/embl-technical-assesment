import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Divider } from "./Divider";

describe("Divider Component", () => {
	test("Divider Rendering", () => {
	render(<Divider />);
	const divider = screen.getByTestId("divider");
		expect(divider).toBeInTheDocument();
		expect(divider).toHaveProperty("id", "divider")
	})
})
