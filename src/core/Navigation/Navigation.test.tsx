import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation, { NavProps } from './Navigation';
import { MemoryRouter } from 'react-router-dom';
import { FaHome, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

describe('Navigation Component', () => {
	const createTestProps = (props?: NavProps): NavProps => {
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
			],

			// common props override
			...props
		};
	};

	describe('Link href attribute rendering', () => {
		test('It should render the correct href attribute', () => {
			// Arrange - Setup your test
			const props = createTestProps();

			// Act - Take some action
			render(
				<MemoryRouter>
					<Navigation routes={props.routes} />
				</MemoryRouter>
			);

			// Assert - Determine if something is as expected
			expect(screen.getByText('Home').closest('a')).toHaveAttribute(
				'href',
				'/'
			);
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

	describe('Link text rendering', () => {
		test('It should render link text', () => {
			// Arrange - Setup your test
			const props = createTestProps();

			// Act - Take some action
			render(
				<MemoryRouter>
					<Navigation routes={props.routes} />
				</MemoryRouter>
			);

			// Assert - Determine if something is as expected
			expect(screen.getByText('Home')).toBeTruthy();
			expect(screen.getByText('About')).toBeTruthy();
			expect(screen.getByText('Contact')).toBeTruthy();
		});
	});
});
