export type Request = {
	queryString: string;
	resultType: string;
	cursorMark: string;
	pageSize: number;
	sort: string;
	synonym: boolean;
}

export type FullTextIdList = {
	fullTextId: string[];
}

export type TmAccessionTypeList = {
	accessionType: string[];
}

export type Result = {
	id: string;
	source: string;
	pmid: string;
	pmcid: string;
	fullTextIdList: FullTextIdList;
	doi: string;
	title: string;
	authorString: string;
	journalTitle: string;
	issue: string;
	journalVolume: string;
	pubYear: string;
	journalIssn: string;
	pageInfo: string;
	pubType: string;
	isOpenAccess: string;
	inEPMC: string;
	inPMC: string;
	hasPDF: string;
	hasBook: string;
	hasSuppl: string;
	citedByCount: number;
	hasReferences: string;
	hasTextMinedTerms: string;
	hasDbCrossReferences: string;
	hasLabsLinks: string;
	hasTMAccessionNumbers: string;
	tmAccessionTypeList: TmAccessionTypeList;
	firstIndexDate: string;
	firstPublicationDate: string;
}

export type ResultList = {
	result: Result[];
}

export type RequestData = {
	version: string;
	hitCount: number;
	nextCursorMark: string;
	nextPageUrl: string;
	request: Request;
	resultList: ResultList;
}

export type ApiRequest = {
	data: RequestData;
	status: number;
	statusText: string;
}

