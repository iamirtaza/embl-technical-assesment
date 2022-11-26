import React from 'react'
import './SearchResultItem.css'

type Props = {
	title: string
	journalTitle: string
	authorString: string
	citedByCount: number
	pmid: string;
	pmcid: string;
}

export const SearchResultItem: React.FC<Props> = ({
	title,
	journalTitle,
	authorString,
	citedByCount,
	pmid,
	pmcid
}) => {
	const authorList = authorString?.split(",");

	return (
		<div data-testid="search-result-item" className="search-result-item">
			<h4 className="title"><a href="/">{title}</a></h4>
			<p className="author">
				{
					authorList?.map((author, index) =>
						<a key={`${author}-${index}`} href="/">
							{author}{index + 1 !== authorList.length && ","}
						</a>)
				}
			</p>
			<p><a href="/" className="journal-title">{journalTitle}</a></p>
			<p>Cited by: {citedByCount} articles {pmid && `| PMID: ${pmid}`} {pmcid && `| PMCID: ${pmcid}`}</p>
		</div>
	)
}
