import { useReducer, useEffect } from 'react';

/* ==============================================
 * Types/Interfaces
 * ============================================== */
export interface UseFetchState {
	data: [];
	status: string;
	error: Error | null;
}

export const useFetchRequest = ({ url }) => {
	// 1. Define initial state
	const initialState: UseFetchState = {
		status: 'FETCH_INIT',
		data: [],
		error: null
	};

	// 2. Define actions 3. Write reducer
	const reducer = (state, action): UseFetchState => {
		switch (action.type) {
			case 'FETCH_INIT':
				console.log('FETCH_INIT');
				return { ...state, status: 'FETCH_INIT' };
			case 'FETCH_FETCHING':
				console.log('FETCH_FETCHING');
				return { ...initialState, status: 'FETCH_FETCHING' };
			case 'FETCH_SUCCESS':
				console.log('FETCH_SUCCESS');
				return {
					...initialState,
					status: 'FETCH_SUCCESS',
					data: action.payload
				};
			case 'FETCH_ERROR':
				console.log('FETCH_ERROR');
				return {
					...initialState,
					status: 'FETCH_ERROR',
					error: action.payload
				};
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({ type: 'FETCH_INIT' });

		const fetchData = async () => {
			try {
				dispatch({ type: 'FETCH_FETCHING' });
				const res = await fetch(url);
				if (!res.ok) {
					dispatch({
						type: 'FETCH_ERROR',
						error: new Error(res.statusText)
					});
				}

				const data = await res.json();
				dispatch({ type: 'FETCH_SUCCESS', payload: data });
			} catch (error) {
				dispatch({ type: 'FETCH_ERROR', payload: error.message });
			}
		};

		fetchData();
	}, []);

	return state;
};
