import { useReducer, useEffect } from 'react';
import { Endpoint } from './../../domain/Dashboard/IndicatorWidget/useIndicator';

/* ==============================================
 * Types/Interfaces
 * ============================================== */
export type UseFetchState = {
	status: string;
	data?: [];
	error?: string | null;
};

type Action =
	| { type: 'FETCH_INIT' }
	| { type: 'FETCH_FETCHING' }
	| { type: 'FETCH_SUCCESS'; payload: [] }
	| { type: 'FETCH_ERROR'; payload: string };

export const useFetchRequest = ({ url }: Endpoint): UseFetchState => {
	// 1. Define initial state
	const initialState: UseFetchState = {
		status: 'FETCH_INIT',
		data: [],
		error: null
	};

	// 2. Define actions 3. Write reducer
	const reducer = (state: UseFetchState, action: Action): UseFetchState => {
		switch (action.type) {
			case 'FETCH_INIT':
				console.log('FETCH_INIT');
				return { ...initialState, status: 'FETCH_INIT' };
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

		const fetchData = async (): Promise<void> => {
			try {
				dispatch({ type: 'FETCH_FETCHING' });
				const res = await fetch(url);
				if (!res.ok) {
					dispatch({
						type: 'FETCH_ERROR',
						payload: new Error(res.statusText).message
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
