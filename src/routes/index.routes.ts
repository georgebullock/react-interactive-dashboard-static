import { FaHome, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

/** ==============================================
 * Dashboard Routes
 * ============================================== */
export const routes = [
	{
		url: '/',
		Icon: FaHome,
		text: 'Home page link'
	},
	{
		url: '/dashboard',
		Icon: FaChartBar,
		text: 'Dashboard page link'
	},
	{
		url: '/signout',
		Icon: FaSignOutAlt,
		text: 'Sign-Out page link'
	}
];
