import { getSearchQueryString } from "./getSearchQueryString"

describe("getSearchQueryString", () => {
	it("builds given array of string to advance query builder format", () => {
		expect(getSearchQueryString(["cat", "OR", "feline"])).toBe("(TITLE:\"cat\") OR (TITLE:\"feline\")")
		expect(getSearchQueryString(["evolution", "AND", "fossils"])).toBe("(TITLE:\"evolution\") AND (TITLE:\"fossils\")")
		expect(getSearchQueryString(["cat", "OR", "feline", "NOT", "fossils"])).toBe("(TITLE:\"cat\") OR (TITLE:\"feline\") NOT (TITLE:\"fossils\")")
	})
})
