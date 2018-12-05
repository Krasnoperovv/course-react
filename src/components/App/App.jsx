import React from 'react'
import SpinningLogo from 'components/SpinningLogo'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1 className="text-center">So here is some magic</h1>
				<div className="row justify-center wrap">
					<SpinningLogo />
				</div>
			</div>
		)
	}
}
