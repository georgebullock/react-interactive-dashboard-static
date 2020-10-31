import { useState } from 'react';
import { useFetchRequest } from './../../../shared/hooks/useFetchRequest';
import { getByInterval } from './getByInterval';

type IndicatorState = {
	// headingLevel,
	// headlineText,
	// indicatorValue,
	// hasContextBar,
	indicatorValue: number;
	// contextBarValue
};

export type Endpoint = {
	url: string;
};

export const useIndicator = ({ url }: Endpoint): IndicatorState => {
	const [indicatorValue, setIndicatorValue] = useState(0);

	const data = useFetchRequest({ url }).data;
	console.log('responseState: ', data);

	const value = getByInterval({ data, range: 28 });
	console.log('value: ', getByInterval({ data, range: 7 }));
	setIndicatorValue(value);

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
