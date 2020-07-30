import React, { ReactElement } from 'react';

type State = {
	list: ReactElement[];
};

class App extends React.Component<{}, State> {
	state: State = {
		list: []
	};

	componentDidMount(): void {
		fetch('http://localhost:3000/comments')
			.then(response => response.json())
			.then(data => {
				const list = data.map(item => {
					return <li key={item.id}>{item.body}</li>;
				});

				this.setState({ list });
			})
			.catch(error => {
				console.error(error);
			});
	}

	render(): React.ReactElement {
		console.log('state: ', this.state.list);
		return (
			<>
				<h1>React Interactive Dashboard</h1>
				<ul className="ui dividing centered header">{this.state.list}</ul>;
			</>
		);
	}
}

export default App;
