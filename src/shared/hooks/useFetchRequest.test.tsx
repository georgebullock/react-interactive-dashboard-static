import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('useFetchRequest', () => {
	const createTestProps = props => {
		return {
			...props
		};
	};

	describe('Fetch user comments', () => {
		test('It should fetch user comments', () => {
			expect('Hello World').toBeTruthy();
		});
	});
});
