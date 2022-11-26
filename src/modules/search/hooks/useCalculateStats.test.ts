import { useCalculateStats } from "./useCalculateStats"

describe("useCalculateStats", () => {
	it("calculate stats based on current page and totalResults", () => {
		expect(useCalculateStats({ currentPage: 4, totalResults: 199 })).toMatchObject({ from: 76, to: 100 })
		expect(useCalculateStats({ currentPage: 3, totalResults:  54694 })).toMatchObject({ from: 51, to: 75 })
	})
})
