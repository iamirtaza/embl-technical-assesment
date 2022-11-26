import { render, screen } from "@testing-library/react"
import App from "./App"

test("render search page component", () => {
	render(<App />)
	const childElement = screen.getByText("Advance search query builder");
	expect(childElement).toBeInTheDocument();
})
