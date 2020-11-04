import { getValueByRange, GetByRangeProps } from './getValueByRange';

describe('Indicator widget business logic', () => {
	const props: GetByRangeProps = {
		data: [
			{
				id: 0,
				userId: 7,
				body:
					'Inventore ducimus aliquid sunt quibusdam at nulla quo accusamus explicabo.',
				createdDate: '2018-07-19T02:17:26.313Z'
			},
			{
				id: 1,
				userId: 1,
				body: 'Facilis dignissimos.',
				createdDate: '2020-10-28T23:07:47.562Z'
			},
			{
				id: 2,
				userId: 8,
				body: 'Sint corporis neque assumenda.',
				createdDate: '2020-10-30T20:10:33.587Z'
			}
		],
		dayRange: 7
	};

	describe('Get comments by interval', () => {
		test('It should should filter comments by interval', () => {
			// Arrange - Setup your test
			// Act - Take some action
			const count = getValueByRange(props);
			// Assert - Determine if something is as expected
			expect(count).toBe(2);
		});
	});
});
