/* ==============================================
 * Types/Interfaces
 * ============================================== */
type TypeComment = {
	id: number;
	userId: number;
	body: string;
	createdDate: string;
};

type TypeUser = {
	id: number;
	username: string;
	userId: number;
	body: string;
	createdDate: string;
};

type TypeTag = {
	id: number;
	tag: string;
	createdDate: string;
};

type Data = TypeComment | TypeUser | TypeTag;

type DayRange = 1 | 7 | 14 | 21 | 28;

type IndicatorValues = {
	indicatorValue: number;
	contextValue: number;
};

export type GetByRangeProps = {
	data: Data[];
	dayRange: DayRange;
};

export const getValueByRange = ({
	data,
	dayRange
}: GetByRangeProps): IndicatorValues => {
	const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
	const today = Date.now();

	const threshold = today - MILLISECONDS_PER_DAY * dayRange;
	const indicatorValue = data.filter(item => {
		const createdDate = Date.parse(item.createdDate);
		return createdDate <= today && createdDate >= threshold;
	});

	const contextThreshold = today - MILLISECONDS_PER_DAY * dayRange * 2;
	const contextInputValue = data.filter(item => {
		const createdDate = Date.parse(item.createdDate);
		return createdDate <= today && createdDate >= contextThreshold;
	});

	const beginningValue = contextInputValue.length - indicatorValue.length;
	const contextValue = parseFloat(
		(indicatorValue.length / beginningValue - 1).toPrecision(2)
	);

	return { indicatorValue: indicatorValue.length, contextValue };
};
