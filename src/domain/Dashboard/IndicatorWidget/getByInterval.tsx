/* ==============================================
 * Types/Interfaces
 * ============================================== */

type CommentType = {
	id: number;
	userId: number;
	body: string;
	createdDate: string;
};

type CommentRange = 7 | 14 | 21 | 28;

export type GetByIntervalProps = {
	data: CommentType[];
	range: CommentRange;
};

export const getByInterval = ({ data, range }: GetByIntervalProps): number => {
	const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
	const today = Date.now();
	const threshold = today - MILLISECONDS_PER_DAY * range;
	const filteredComments = data.filter(item => {
		const createdDate = Date.parse(item.createdDate);
		return createdDate <= today && createdDate >= threshold;
	});

	return filteredComments.length;
};
