import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { TermInputSection, Props } from "./TermInputSection";
import userEvent from "@testing-library/user-event";

const props: Props = {
	onSubmitTermOrPhrase: jest.fn(),
    searchQuery:["cat", "OR", "feline"]
}

describe("Term Input Section Component", () => {
	test("Component Rendering", () => {
		render(<TermInputSection {...props} />);
		const searchQuerySectionComponent = screen.getByTestId("term-input-section");
		expect(searchQuerySectionComponent).toBeInTheDocument();
	})

	test("term submit button is disabled by default", () => {
		render(<TermInputSection {...props} />);
		const termSubmitButton = screen.getByTestId("term-submit-button");
		expect(termSubmitButton).toHaveProperty("disabled", true)
	})
	
	test("term input is active after having some input", () => {
		render(<TermInputSection {...props} />);
		const termSubmitButton = screen.getByTestId("term-submit-button");
		const termInput = screen.getByTestId("term-input");
		userEvent.type(termInput, "cat")
		expect(termSubmitButton).toHaveProperty("disabled", false)
	})
})
