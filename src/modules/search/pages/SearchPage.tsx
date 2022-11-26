import React from "react";
import { Divider } from "../../../common/components/Divider/Divider";
import { SearchQuerySection } from "../components/SearchQuerySection/SearchQuerySection";
import { SearchResultsSection } from "../components/SearchResultsSection/SearchResultsSection";
import { TermInputSection } from "../components/TermInputSection/TermInputSection";

import { useSearchPage } from "../hooks/useSearchPage"

export const SearchPage: React.FC = () => {
	const {
		handleSearch,
		searchResult,
		isLoading,
		handleSubmitTermOrPhrase,
		searchQuery,
		handlePageChange,
		currentPage,
		handleClear
	} = useSearchPage()

	return (
		<div>
			<div className="section">
				<h2 className="section-heading pl-15">Advance search query builder</h2>
				<TermInputSection
					onSubmitTermOrPhrase={handleSubmitTermOrPhrase}
					searchQuery={searchQuery} />
			</div>
			<Divider />
			<SearchQuerySection
				onSearch={handleSearch}
				searchQuery={searchQuery}
				onClear={handleClear} />
			<Divider />
			<SearchResultsSection
				searchResult={searchResult}
				isLoading={isLoading}
				onPageChange={handlePageChange}
				currentPage={currentPage} />
		</div>
	)
}
