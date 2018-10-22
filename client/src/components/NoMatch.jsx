import React from 'react'

export const NoMatch = () => (
	<div>
		<p>404 Error: Page not found.</p>
		<pre>{this.props.err}</pre>
	</div>
)