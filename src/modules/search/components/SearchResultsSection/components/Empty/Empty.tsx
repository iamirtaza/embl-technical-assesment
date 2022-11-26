import React from "react"
import { BsFillInfoCircleFill } from "react-icons/bs"

import "./Empty.css"

type Props = {
	message: string
}

export const Empty: React.FC<Props> = ({ message }) => {
	return <div className="empty"><BsFillInfoCircleFill color="#494949" /> {message}</div>
}
