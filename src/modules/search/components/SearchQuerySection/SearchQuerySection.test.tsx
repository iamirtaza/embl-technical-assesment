import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { SearchQuerySection, Props } from "./SearchQuerySection";

const props: Props = {
	onSearch: jest.fn(),
	searchQuery: ["cat", "OR", "feline"],
	onClear: jest.fn()
}

describe("Search Query Section Component", () => {
	test("Component Rendering", () => {
		render(<SearchQuerySection {...props} />);
		const searchQuerySectionComponent = screen.getByTestId("search-query-section");
		expect(searchQuerySectionComponent).toBeInTheDocument();
	})

	test("search query submit button is disabled by default", () => {
		render(<SearchQuerySection {...props} searchQuery={[]} />);
		const termSubmitButton = screen.getByTestId("search-query-submit-button");
		expect(termSubmitButton.childNodes[0]).toHaveProperty("disabled", true)
	})

	test("search query submit button is enabled", () => {
		render(<SearchQuerySection {...props} />);
		const termSubmitButton = screen.getByTestId("search-query-submit-button");
		expect(termSubmitButton.childNodes[0]).toHaveProperty("disabled", false)
	})
	
})
