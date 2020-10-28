import { useReducer } from 'react';

/* ==============================================
 * Types/Interfaces
 * ============================================== */
interface UseFetchState {
	data: [];
	status: string;
	error: Error | null;
}

const initialState: UseFetchState = {
	data: [],
	status: 'Init',
	error: null
};

// Import useReducer, useEffect
// Set initial state
// Define your actions
// Write your reducer
// Implement fetching logic in useEffect
// Update state based on the fetch request status
// Fetch request states => Init, Fetching, Fetched, Error
// Return data
