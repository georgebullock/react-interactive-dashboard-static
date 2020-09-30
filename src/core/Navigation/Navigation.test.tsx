import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation, { NavProps } from './Navigation';
import { MemoryRouter } from 'react-router-dom';
import { FaHome, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

// A utility method for working with test props (can also be imported)
function createTestProps(): NavProps {
	return {
		// common props
		routes: [
			{
				url: '/',
				Icon: FaHome,
				text: 'Home'
			},
			{
				url: '/about',
				Icon: FaChartBar,
				text: 'About'
			},
			{
				url: '/contact',
				Icon: FaSignOutAlt,
				text: 'Contact'
			}
		]
	};
}

// Describe Rendering
describe('Rendering', () => {
	test('It should be something specific', () => {
		// Arrange - Setup your test
		const props = createTestProps();
		const { debug } = render(
			<MemoryRouter>
				<Navigation routes={props.routes} />
			</MemoryRouter>
		);

		// Act - Take some action
		// Assert - Determine if something is as expected
		expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
		expect(screen.getByText('About').closest('a')).toHaveAttribute(
			'href',
			'/about'
		);
		expect(screen.getByText('Contact').closest('a')).toHaveAttribute(
			'href',
			'/contact'
		);
	});
});
