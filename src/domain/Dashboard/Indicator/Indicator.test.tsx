import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Indicator, { IndicatorProps } from './Indicator';

describe('Indicator', () => {
	const createTestProps = (props?: IndicatorProps): IndicatorProps => {
		return {
			// common props
			headingLevel: 'h2',
			headlineText: 'Sales',
			indicatorValue: 250,
			contextBarValue: 0.25,
			hasContextBar: true,

			// common props override
			...props
		};
	};

	describe('Content rendering', () => {
		test('It should should render the correct number of comments', () => {
			// Arrange - Setup your test
			const props = createTestProps();

			// Act - Take some action
			render(
				<Indicator
					headingLevel={props.headingLevel}
					headlineText={props.headlineText}
					indicatorValue={props.indicatorValue}
					contextBarValue={props.contextBarValue}
					hasContextBar={props.hasContextBar}
				/>
			);

			// Assert - Determine if something is as expected
			expect(document.querySelector('h2')).toBeInTheDocument();
			expect(screen.getByText('Sales')).toBeInTheDocument();
			expect(screen.getByRole('article')).toHaveTextContent('250');
			expect(screen.getByText('0.25')).toBeInTheDocument();
		});
	});

	describe('Content rendering', () => {
		test('It should should not render a ContextBar component', () => {
			// Arrange - Setup your test
			const props = createTestProps({
				// common props
				headingLevel: 'h3',
				headlineText: 'Conversions',
				indicatorValue: 1000,
				hasContextBar: false
			});

			// Act - Take some action
			render(
				<Indicator
					headingLevel={props.headingLevel}
					headlineText={props.headlineText}
					indicatorValue={props.indicatorValue}
					contextBarValue={props.contextBarValue}
					hasContextBar={props.hasContextBar}
				/>
			);

			// Assert - Determine if something is as expected
			expect(document.querySelector('h3')).toBeInTheDocument();
			expect(screen.getByText('Conversions')).toBeInTheDocument();
			expect(screen.getByRole('article')).toHaveTextContent('1000');
			expect(screen.queryByText('0.25')).toBeNull();
		});
	});
});
