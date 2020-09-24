import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext, IconType } from 'react-icons';
import { FaHome, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import styles from './Navigation.module.scss';

/** ==============================================
 * Types/Interfaces
 * ============================================== */
type RouteObject = {
	url: string;
	Icon: IconType;
	text?: string;
};

interface NavListProps {
	routes: RouteObject[];
}

interface NavItemProps {
	item: {
		url: string;
		Icon: IconType;
		text?: string;
	};
}

/** ==============================================
 * Third-Party Component Props
 * ============================================== */
// react-icons Provider object
const iconStyles = {
	color: '#5d8def',
	size: '3rem'
};

/** ==============================================
 * Dashboard Routes
 * ============================================== */
const routes = [
	{
		url: '/',
		Icon: FaHome
	},
	{
		url: '/dashboard',
		Icon: FaChartBar
	},
	{
		url: '#',
		Icon: FaSignOutAlt
	}
];

const Navigation: React.FunctionComponent = () => {
	return (
		<nav className={styles.nav}>
			<IconContext.Provider value={{ ...iconStyles }}>
				<NavigationList routes={routes} />
			</IconContext.Provider>
		</nav>
	);
};

const NavigationList: React.FunctionComponent<NavListProps> = ({
	routes
}: NavListProps) => {
	return (
		<ul className={styles.list}>
			{routes.map(item => {
				return <NavItem key={item.url} item={item} />;
			})}
		</ul>
	);
};

const NavItem: React.FunctionComponent<NavItemProps> = ({
	item
}: NavItemProps) => {
	const { url, Icon, text } = item;

	return (
		<NavLink className={styles['list-item']} to={url}>
			<Icon />
			{text}
		</NavLink>
	);
};

export default Navigation;
