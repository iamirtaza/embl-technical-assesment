import { FormEvent } from "react"
import { Result } from "../../../common/types/request.types"

type SearchMeta = {
	totalResults: number
	nextCursorMark: string
}

export type SearchResult = {
	searchMeta: SearchMeta
	result: Result[]
}

export type UseSearchPageResult = {
	handleSearch: (e: FormEvent<HTMLFormElement>) => void
	searchResult?: SearchResult
	isLoading: boolean
	handleSubmitTermOrPhrase: (e: FormEvent<HTMLFormElement>) => void
	searchQuery: string[]
	handlePageChange: (page: number) => void
	currentPage: number
	handleClear: () => void
}

export type GetArticlesParams = {
	pageSize?: number,
	cursorMark: string
}

