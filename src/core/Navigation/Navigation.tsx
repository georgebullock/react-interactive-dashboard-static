import React from 'react';
import { NavLink, RouteProps } from 'react-router-dom';
import { IconContext, IconType } from 'react-icons';
import styles from './Navigation.module.scss';

/** ==============================================
 * Types/Interfaces
 * ============================================== */
interface RouteObject extends RouteProps {
	url: string;
	Icon: IconType;
	text?: string;
}

export interface NavProps {
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

const Navigation: React.FunctionComponent<NavProps> = ({
	routes
}: NavProps) => {
	return (
		<nav className={styles.nav}>
			<IconContext.Provider value={{ ...iconStyles }}>
				<NavigationList routes={routes} />
			</IconContext.Provider>
		</nav>
	);
};

const NavigationList: React.FunctionComponent<NavProps> = ({
	routes
}: NavProps) => {
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
		<NavLink className={styles['list-item']} to={url} exact>
			<Icon />
			{text ? (
				<span className={styles['list-item__text']}>{`${text}`}</span>
			) : (
				undefined
			)}
		</NavLink>
	);
};

export default Navigation;
