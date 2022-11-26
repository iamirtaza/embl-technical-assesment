import axios from "axios"
import { FormEvent, useCallback, useState } from "react"
import { ApiRequest, RequestData, ResultList } from "../../../common/types/request.types"
import { getSearchQueryString } from "../../../common/utils/getSearchQueryString"
import { GetArticlesParams, SearchResult, UseSearchPageResult } from "./useSearchPage.types"

export function useSearchPage(): UseSearchPageResult {
	const [searchResult, setSearchResult] = useState<SearchResult | undefined>()
	const [isLoading, setIsLoading] = useState(false)
	const [searchQuery, setSearchQuery] = useState<string[]>([])
	const [currentPage, setCurrentPage] = useState(1)

	const getArticles = useCallback(async ({ pageSize, cursorMark }: GetArticlesParams) => {
		setIsLoading(true)
		let value = getSearchQueryString(searchQuery)
		const apiReq = await axios.get(`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${value}&cursorMark=${cursorMark}&pageSize=${pageSize}`);
		if (apiReq) {
			const { data } = apiReq as ApiRequest
			const { hitCount, nextCursorMark, resultList } = data as RequestData
			const { result } = resultList as ResultList
			setSearchResult({
				searchMeta: {
					totalResults: hitCount,
					nextCursorMark
				},
				result
			})
		}
		setIsLoading(false)
	}, [searchQuery])

	const handleSearch = useCallback(async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		getArticles({ pageSize: 25, cursorMark: "*" })
		setCurrentPage(1)
	}, [getArticles])

	const handleSubmitTermOrPhrase = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { operator, term } = e.target as any
		if (operator) {
			searchQuery.push(operator.value)
		}
		searchQuery.push(term.value)
		setSearchQuery([...searchQuery])
	}

	const handlePageChange = (page: number) => {
		if (page > currentPage) {
			getArticles({ pageSize: (page - currentPage) * 25, cursorMark: searchResult?.searchMeta.nextCursorMark ?? "*" })
		}
		else {
			getArticles({ pageSize: page * 25, cursorMark: "*" })
		}
		setCurrentPage(page)
	}

	const handleClear = () => {
		setSearchQuery([])
	}

	return {
		handleSearch,
		searchResult,
		isLoading,
		handleSubmitTermOrPhrase,
		searchQuery,
		handlePageChange,
		currentPage,
		handleClear
	}
}
