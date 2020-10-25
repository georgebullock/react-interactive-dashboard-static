import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Indicator, { IndicatorProps } from './Indicator';

describe('Indicator', () => {
	const createTestProps = (props?: IndicatorProps): IndicatorProps => {
		return {
			// common props
			indicatorValue: '250',
			contextBarValue: '25%',
			hasContextBar: true,
			// common props override
			...props
		};
	};

	describe('Text rendering', () => {
		test('It should should render the correct number of comments', () => {
			// Arrange - Setup your test
			const props = createTestProps();

			// Act - Take some action
			render(
				<Indicator
					indicatorValue={props.indicatorValue}
					contextBarValue={props.contextBarValue}
					hasContextBar={props.hasContextBar}
				/>
			);

			// Assert - Determine if something is as expected
			expect(screen.getByText('Comments')).toBeInTheDocument();
			expect(screen.getByRole('article')).toHaveTextContent('250');
			expect(screen.getByText('Δ 25%')).toBeInTheDocument();
		});
	});
});
