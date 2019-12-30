import React, { useState } from "react"


function Button(props) {
	const [text, setText] = useState("")
	function handleClick() {
		setText("Procced to checkout")
	}
	return(
		<button onClick={handleClick}>{text || props.text}</button>
	)
}
