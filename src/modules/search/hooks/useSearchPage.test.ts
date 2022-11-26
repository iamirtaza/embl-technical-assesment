import { act, renderHook } from "@testing-library/react";
import { FormEvent } from "react";
import { useSearchPage } from "./useSearchPage"

const event = { target: { term: { value: "cat" } } as unknown, preventDefault: jest.fn() as unknown } as FormEvent<HTMLFormElement>

describe("useSearchPage", () => {

	it('Should provide undefined search result by default', () => {
		const { result } = renderHook(useSearchPage);
		const { current } = result
		const { searchResult } = current
		expect(searchResult).toEqual(undefined);
	});

	it('Should provide empty search query by default', () => {
		const { result } = renderHook(useSearchPage);
		const { current } = result
		const { searchQuery } = current
		expect(searchQuery).toEqual([]);
	});

	it('Should provide current page to be 1 by default', () => {
		const { result } = renderHook(useSearchPage);
		const { current } = result
		const { currentPage } = current
		expect(currentPage).toEqual(1);
	});

	it('Should update currentPage', () => {
		const { result } = renderHook(useSearchPage);
		const { current } = result
		const { handlePageChange, currentPage } = current
		expect(currentPage).toEqual(1);

		act(() => {
			handlePageChange(2)
		});

		expect(currentPage).toEqual(1);
	});

	it('Should submit term and update searchQuery', () => {
		const { result } = renderHook(useSearchPage);
		const { current } = result
		const { handleSubmitTermOrPhrase, searchQuery } = current
		expect(searchQuery).toEqual([]);

		act(() => {
			handleSubmitTermOrPhrase(event)
		});

		expect(searchQuery).toEqual(["cat"]);
	});

})
