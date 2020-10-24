import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Indicator from './Indicator';

describe('Indicator', () => {
	const createTestProps = props => {
		return {
			// common props

			// common props override
			...props
		};
	};

	describe('Text rendering', () => {
		test.skip('It should should the number of comments', () => {
			// Arrange - Setup your test
			const props = createTestProps({});

			// Act - Take some action
			render(<Indicator />);

			// Assert - Determine if something is as expected
		});
	});
});
