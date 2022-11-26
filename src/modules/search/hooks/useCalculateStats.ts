type UseCalculateStatsParams = {
	currentPage: number
	totalResults?: number
}

type UseCalculateStatsResult = {
	from?: number
	to?: number
}

export function useCalculateStats({ currentPage, totalResults }: UseCalculateStatsParams): UseCalculateStatsResult {
	const itemsCountPerPage = 25
	const from = ((currentPage - 1) * 25 + 1)
	const to = ((currentPage * itemsCountPerPage) > (totalResults ?? 0) ? totalResults : currentPage * itemsCountPerPage)
	return {
		from,
		to
	}
}
