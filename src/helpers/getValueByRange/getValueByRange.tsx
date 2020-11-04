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

export type GetByRangeProps = {
	data: Data[];
	dayRange: DayRange;
};

export const getValueByRange = ({
	data,
	dayRange
}: GetByRangeProps): number => {
	const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
	const today = Date.now();
	const threshold = today - MILLISECONDS_PER_DAY * dayRange;
	const filteredData = data.filter(item => {
		const createdDate = Date.parse(item.createdDate);
		return createdDate <= today && createdDate >= threshold;
	});

	return filteredData.length;
};
