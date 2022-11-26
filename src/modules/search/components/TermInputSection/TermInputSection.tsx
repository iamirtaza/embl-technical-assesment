import React, { FormEvent, useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io"

import "./TermInputSection.css"


export type Props = {
	onSubmitTermOrPhrase: (e: FormEvent<HTMLFormElement>) => void
	searchQuery: string[]
}

export const TermInputSection: React.FC<Props> = ({
	onSubmitTermOrPhrase,
	searchQuery
}) => {
	const [term, setTerm] = useState("")

	return (
		<div data-testid="term-input-section">
			<div className="term-input-section-header">
				<h3>Add keyword or phrase</h3>
				<IoMdArrowDropdown size={20} />
			</div>
			<div className="px-15">
				<form onSubmit={(e) => {
					onSubmitTermOrPhrase(e)
					setTerm("")
				}}
				>
					<p id="label">Enter term or phrase</p>
					<div id="term-input">
						{
							searchQuery && searchQuery?.length > 0 &&
							<select name="operator">
								<option value="OR">OR</option>
								<option value="AND">AND</option>
								<option value="NOT">NOT</option>
							</select>
						}
						<input
							value={term}
							onChange={(e) => setTerm(e.target.value)}
							required
							name="term"
							id="term"
							className="primary-input"
							data-testid="term-input"
						/>
						<input
							type="submit"
							className="primary-button"
							disabled={!term}
							value="Add"
							data-testid="term-submit-button"
						/>
					</div>
				</form>
			</div>
		</div>
	)
}
