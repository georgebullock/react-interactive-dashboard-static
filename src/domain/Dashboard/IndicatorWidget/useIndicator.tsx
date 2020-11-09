import { useFetchRequest } from './../../../shared/hooks/useFetchRequest';
import { getValueByRange } from '../../../helpers/getValueByRange/getValueByRange';

type IndicatorValues = {
	indicatorValue: number;
	contextValue: number;
};

type DayRange = 1 | 7 | 14 | 21 | 28;

export type Endpoint = string;

export const useIndicator = (
	url: Endpoint,
	dayRange: DayRange
): IndicatorValues => {
	const data = useFetchRequest(url).data;
	const { indicatorValue, contextValue } = getValueByRange({
		data,
		dayRange
	});

	console.log('indicatorValue in useIndicator: ', indicatorValue);
	console.log('contextValue in useIndicator: ', contextValue);

	return { indicatorValue, contextValue };
};
