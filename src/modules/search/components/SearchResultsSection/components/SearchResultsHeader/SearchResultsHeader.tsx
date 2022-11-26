import React from "react"
import "./SearchResultsHeader.css"
import Pagination from "react-js-pagination";
import { useCalculateStats } from "../../../../hooks/useCalculateStats";

type Props = {
	totalResults?: number
	currentPage: number
	onPageChange: (page: number) => void
}

export const SearchResultsHeader: React.FC<Props> = ({
	totalResults,
	onPageChange,
	currentPage
}) => {
	const itemsCountPerPage = 25
	const { from, to } = useCalculateStats({ currentPage, totalResults })
	return <div id="search-results-header">
		<p>{from} - {to} of <b>{totalResults?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b> results</p>
		<Pagination
			activePage={currentPage}
			itemsCountPerPage={itemsCountPerPage}
			totalItemsCount={totalResults ?? 0}
			pageRangeDisplayed={5}
			onChange={(page) => onPageChange(page)}
			prevPageText={currentPage !== 1 ? "Prev" : ""}
			nextPageText="Next"
			hideFirstLastPages
		/>
	</div>
}
