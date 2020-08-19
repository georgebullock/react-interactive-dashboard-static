import React from 'react';
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
					<li className={styles['list-item']}>
						<FaHome />
					</li>
					<li className={styles['list-item']}>
						<FaChartBar />
					</li>
					<li className={styles['list-item']}>
						<FaSignOutAlt />
					</li>
				</ul>
			</IconContext.Provider>
		</nav>
	);
};

export default Navigation;
