import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Headline, { HeadlineProps } from './Headline';

describe('Headline', () => {
	const createTestProps = (props?: HeadlineProps): HeadlineProps => {
		return {
			// common props
			headingLevel: 'h2',
			headlineText: 'Total Comments',

			// common props override
			...props
		};
	};

	describe('Text rendering', () => {
		test('It should should render the right headline text', () => {
			// Arrange - Setup your test
			const props = createTestProps();

			// Act - Take some action
			render(
				<Headline
					headingLevel={props.headingLevel}
					headlineText={props.headlineText}
				/>
			);

			// Assert - Determine if something is as expected
			expect(
				screen.getByRole('heading', { name: /Total Comments/i })
			).toBeTruthy();

			expect(
				screen.getByRole('heading', {
					name: /Total Comments/i
				})
			).toHaveTextContent('Total Comments');
		});

		test('It should should render the right headline tag', () => {
			// Arrange - Setup your test
			const props = createTestProps();

			// Act - Take some action
			render(
				<Headline
					headingLevel={props.headingLevel}
					headlineText={props.headlineText}
				/>
			);

			expect(document.querySelector('h2')).toBeInTheDocument();
		});
	});
});
