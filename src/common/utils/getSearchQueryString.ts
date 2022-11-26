export function getSearchQueryString(searchQuery: string[]): string {
	let value = ""
	searchQuery?.map((item, index) => {
		if (index % 2 === 0) return value = value + `(TITLE:"${item}") `
		return value = value + `${item} `

	})
	return value.trimEnd();
}
