import React from "react"
import { SearchResult } from "../../hooks/useSearchPage.types"
import { Empty } from "./components/Empty/Empty"
import { SearchResultItem } from "./components/SearchResultItem/SearchResultItem"
import { SearchResultsHeader } from "./components/SearchResultsHeader/SearchResultsHeader"

import "./SearchResultsSection.css"

export type Props = {
	searchResult?: SearchResult
	isLoading: boolean
	currentPage: number
	onPageChange: (page: number) => void
}

export const SearchResultsSection: React.FC<Props> = ({
	searchResult,
	isLoading,
	currentPage,
	onPageChange
}) => {
	const { searchMeta, result } = searchResult ?? {}
	const { totalResults } = searchMeta ?? {}

	const content = isLoading ? <div id="loader-container"><div className="loader"></div></div> : result && result?.length > 0 ? <>
		<SearchResultsHeader
			totalResults={totalResults}
			onPageChange={onPageChange}
			currentPage={currentPage}
		/>
		<div data-testid="content">
			{
				result?.slice(-25)?.map(({
					id,
					title,
					journalTitle,
					authorString,
					citedByCount,
					pmid,
					pmcid
				}) => {
					return <SearchResultItem
						key={`${id}-${title}`}
						title={title}
						journalTitle={journalTitle}
						authorString={authorString}
						citedByCount={citedByCount}
						pmid={pmid}
						pmcid={pmcid}
					/>
				})
			}
		</div>
	</>
		: totalResults === 0 ?
			<Empty message="There are no citations matching your query." />
			: <p>Enter a search term to view result</p>

	return (
		<div data-testid="search-results-section" className="section">
			<h2 className="section-heading pl-15">Search results</h2>
			<div className="px-15" style={{ minHeight: '100vh' }}>
				{content}
			</div>
		</div>
	)
}
