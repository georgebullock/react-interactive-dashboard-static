import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './core/App/App';
import './index.scss';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.querySelector('#react-entry')
);
