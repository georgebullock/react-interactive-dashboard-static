import { getValueByRange, GetByRangeProps } from './getValueByRange';

describe('Indicator widget business logic', () => {
	const props: GetByRangeProps = {
		data: [
			{
				id: 0,
				userId: 7,
				body:
					'Inventore ducimus aliquid sunt quibusdam at nulla quo accusamus explicabo.',
				createdDate: '2020-10-27T02:17:26.313Z'
			},
			{
				id: 1,
				userId: 1,
				body: 'Facilis dignissimos.',
				createdDate: '2020-11-07T02:17:26.313Z'
			},
			{
				id: 2,
				userId: 8,
				body: 'Sint corporis neque assumenda.',
				createdDate: '2020-11-08T02:17:26.313Z'
			}
		],
		dayRange: 7
	};

	describe('Get comments by day range', () => {
		test.skip('It should should filter comments by day range', () => {
			// Arrange - Setup your test
			// Act - Take some action
			const data = getValueByRange(props);
			// Assert - Determine if something is as expected
			expect(data.indicatorValue).toBe(2);
			expect(data.contextValue).toBe(1);
		});
	});
});
