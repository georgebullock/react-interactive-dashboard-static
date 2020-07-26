import React from 'react';

class App extends React.Component {
	text = `React Interactive Dashboard`;

	data = fetch('http://localhost:3000/users')
		.then(response => {
			if (!response.ok) {
				console.error('Response not OK');
			}

			return response.json();
		})
		.then(data => {
			console.log('data: ', data);
			return data;
		})
		.catch(error => {
			console.error(error);
		});

	render(): React.ReactElement {
		return <h1 className="ui dividing centered header">{this.text}</h1>;
	}
}

export default App;
