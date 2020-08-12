// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './../src/app.scss';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.querySelector('#react-entry')
);
