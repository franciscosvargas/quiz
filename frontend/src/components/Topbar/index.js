import React from 'react'

import { 
	Container,
	Link
 } from './styles'

function TopBar({title}) {
	return (
		<Container>
			<Link to="/">{title || 'QUIZ'}</Link>

			<Link ml={1} to="/">BACK</Link>

		</Container>
	)
}

export default TopBar