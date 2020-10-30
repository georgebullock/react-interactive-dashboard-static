import { useState } from 'react';
import {
	useFetchRequest,
	UseFetchState
} from './../../../shared/hooks/useFetchRequest';

// const endpoint = { url: 'http://localhost:3000/users' };

type IndicatorState = {
	// headingLevel,
	// headlineText,
	// indicatorValue,
	// hasContextBar,
	// indicatorValue: number
	// contextBarValue
};

export const useIndicator = ({ endpoint }) => {
	const [indicatorValue, setIndicatorValue] = useState();
	const responseState = useFetchRequest(endpoint);
	console.log('responseState: ', responseState);
	// setIndicatorValue();

	return {
		// headingLevel,
		// headlineText,
		// indicatorValue,
		// hasContextBar,
		indicatorValue
		// contextBarValue
	};
};

// 1. Business Logic
// A function that returns the number of comments in a given time frame
// A function that returns the change in comments between two time frames
// It should take the response state of useFetchRequest (array of comments)
// It should return the comments whose created date is between today and today - X days
// An api that takes an array and # days
// Filter the array and return the length of the array

// 2. Implementation Logic
// A hook that returns the props necessary to render the widget
