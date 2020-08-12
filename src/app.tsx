import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

const CommentApp = (): ReactElement => {
	return <div>Comment App</div>;
};

const Dashboard = (): ReactElement => {
	return <div>Dashboard</div>;
};

function App(): ReactElement {
	return (
		<>
			<Switch>
				<Route exact={true} path="/">
					<CommentApp />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
			</Switch>
		</>
	);
}

export default App;
