import React, { FormEvent } from 'react'
import { BiSearch } from 'react-icons/bi';
import { Button } from '../../../../common/components/Button/Button';

import { getSearchQueryString } from '../../../../common/utils/getSearchQueryString'
import './SearchQuerySection.css'

export type Props = {
	onSearch: (e: FormEvent<HTMLFormElement>) => void
	searchQuery: string[]
	onClear: () => void
}

export const SearchQuerySection: React.FC<Props> = ({
	onSearch,
	searchQuery,
	onClear
}) => {
	let value = getSearchQueryString(searchQuery)

	return (
		<div data-testid="search-query-section" className="section">
			<h2 className="section-heading pl-15">Search query</h2>
			<div className="px-15">
				<form onSubmit={onSearch} id="search-query-form">
					<div id="search-query-input">
						<textarea className="primary-input" value={value} readOnly />
						<div data-testid="search-query-submit-button">
							<Button variant="primary" disabled={searchQuery?.length === 0}><BiSearch size={14} /> View search results</Button>
						</div>
					</div>
				</form>
				<Button variant="secondary" onClick={() => onClear()}>Clear</Button>
			</div>
		</div>
	)
}
