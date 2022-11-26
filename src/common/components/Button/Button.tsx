import React, { MouseEventHandler, ReactNode } from "react"
import "./Button.css"

type Props = {
	variant: "primary" | "secondary"
	children: ReactNode
	disabled?: boolean
	onClick?: MouseEventHandler | undefined;
}

export const Button: React.FC<Props> = ({ variant, children, disabled, onClick }) => {
	const className = variant === "primary" ? "primary-button" : "secondary-button";
	return (
		<button
			data-testid="button"
			onClick={onClick}
			disabled={disabled}
			className={className}>
			{children}
		</button>
	)
}
