/* ==============================================
 * Types/Interfaces
 * ============================================== */

type CommentType = {
	id: number;
	userId: number;
	body: string;
	createdDate: string;
};

type DayRange = 7 | 14 | 21 | 28;

export type GetByIntervalProps = {
	data: CommentType[];
	dayRange: DayRange;
};

export const getByInterval = ({
	data,
	dayRange
}: GetByIntervalProps): number => {
	const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
	const today = Date.now();
	const threshold = today - MILLISECONDS_PER_DAY * dayRange;
	const filteredComments = data.filter(item => {
		const createdDate = Date.parse(item.createdDate);
		return createdDate <= today && createdDate >= threshold;
	});

	return filteredComments.length;
};
