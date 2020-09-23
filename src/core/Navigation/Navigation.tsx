import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styles from './Navigation.module.scss';

const iconStyles = {
	color: '#5d8def',
	size: '3rem'
};

const Navigation: React.FunctionComponent = () => {
	return (
		<nav className={styles.nav}>
			<IconContext.Provider value={{ ...iconStyles }}>
				<ul className={styles.list}>
					<NavLink className={styles['list-item']} to="/">
						<FaHome />
					</NavLink>
					<NavLink className={styles['list-item']} to="/dashboard">
						<FaChartBar />
					</NavLink>
					<NavLink className={styles['list-item']} to="/dashboard">
						<FaSignOutAlt />
					</NavLink>
				</ul>
			</IconContext.Provider>
		</nav>
	);
};

export default Navigation;
