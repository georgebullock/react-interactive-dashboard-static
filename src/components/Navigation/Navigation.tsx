import React from 'react';
import { FaHome, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import styles from './Navigation.module.scss';

const Navigation: React.FunctionComponent = () => {
	return (
		<nav className={styles.nav}>
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
		</nav>
	);
};

export default Navigation;
