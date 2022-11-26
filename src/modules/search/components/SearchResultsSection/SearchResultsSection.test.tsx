import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { SearchResultsSection } from "./SearchResultsSection";

describe("Search Result Section Component", () => {
	test("Component Rendering with default state", () => {
		render(<SearchResultsSection isLoading={false} currentPage={1} onPageChange={jest.fn()} />);
		const searchQuerySectionComponent = screen.getByTestId("search-results-section");
		expect(searchQuerySectionComponent).toHaveTextContent("Enter a search term to view result");
	})

	test("Component Rendering with no resuts", () => {
		render(<SearchResultsSection searchResult={{
			result: [],
			searchMeta: { totalResults: 0, nextCursorMark: "*" }
		}}
			isLoading={false}
			currentPage={1}
			onPageChange={jest.fn()}
		/>
		);

		const searchQuerySectionComponent = screen.getByTestId("search-results-section");
		expect(searchQuerySectionComponent).toHaveTextContent("There are no citations matching your query.");
	})

	test("Component Rendering with 1 result", () => {
		render(<SearchResultsSection searchResult={{
			result: [
				{
					"id": "35878386",
					"source": "MED",
					"pmid": "35878386",
					"pmcid": "PMC9324668",
					"fullTextIdList": {
						"fullTextId": [
							"PMC9324668"
						]
					},
					"doi": "10.3390/vetsci9070369",
					"title": "Cat-Owner Relationship and Cat Behaviour: Effects of the COVID-19 Confinement and Implications for Feline Management.",
					"authorString": "Riggio G, Borrelli C, Piotti P, Grondona A, Gazzano A, Di Iacovo FP, Fatjó J, Bowen JE, Mota-Rojas D, Pirrone F, Mariti C.",
					"journalTitle": "Vet Sci",
					"issue": "7",
					"journalVolume": "9",
					"pubYear": "2022",
					"journalIssn": "2306-7381",
					"pageInfo": "369",
					"pubType": "research-article; journal article",
					"isOpenAccess": "Y",
					"inEPMC": "Y",
					"inPMC": "N",
					"hasPDF": "Y",
					"hasBook": "N",
					"hasSuppl": "Y",
					"citedByCount": 0,
					"hasReferences": "Y",
					"hasTextMinedTerms": "Y",
					"hasDbCrossReferences": "N",
					"hasLabsLinks": "Y",
					"hasTMAccessionNumbers": "N",
					"firstIndexDate": "2022-07-26",
					"firstPublicationDate": "2022-07-18",
					"tmAccessionTypeList": { accessionType: ["test"] }

				},
				{
					"id": "25878386",
					"source": "MED",
					"pmid": "35878386",
					"pmcid": "PMC9324668",
					"fullTextIdList": {
						"fullTextId": [
							"PMC9324668"
						]
					},
					"doi": "10.3390/vetsci9070369",
					"title": "Cat-Owner Relationship and Cat Behaviour: Effects of the COVID-19 Confinement and Implications for Feline Management.",
					"authorString": "Riggio G, Borrelli C, Piotti P, Grondona A, Gazzano A, Di Iacovo FP, Fatjó J, Bowen JE, Mota-Rojas D, Pirrone F, Mariti C.",
					"journalTitle": "Vet Sci",
					"issue": "7",
					"journalVolume": "9",
					"pubYear": "2022",
					"journalIssn": "2306-7381",
					"pageInfo": "369",
					"pubType": "research-article; journal article",
					"isOpenAccess": "Y",
					"inEPMC": "Y",
					"inPMC": "N",
					"hasPDF": "Y",
					"hasBook": "N",
					"hasSuppl": "Y",
					"citedByCount": 0,
					"hasReferences": "Y",
					"hasTextMinedTerms": "Y",
					"hasDbCrossReferences": "N",
					"hasLabsLinks": "Y",
					"hasTMAccessionNumbers": "N",
					"firstIndexDate": "2022-07-26",
					"firstPublicationDate": "2022-07-18",
					"tmAccessionTypeList": { accessionType: ["test"] }

				}
			],
			searchMeta: { totalResults: 0, nextCursorMark: "*" }
		}}
			isLoading={false}
			currentPage={1}
			onPageChange={jest.fn()}
		/>
		);

		const result = screen.getByTestId("content");
		expect(result.childNodes.length).toBe(2)
	})
})
