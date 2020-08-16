import React from 'react';
import styles from './Navigation.module.scss';

// Props - none

// State - none

// Component

const Navigation: React.FunctionComponent<{}> = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles['list-item']}>Home</li>
				<li className={styles['list-item']}>Dashboard</li>
			</ul>
		</nav>
	);
};

export default Navigation;
