import React from 'react';
import styles from './Navigation.module.scss';

const Navigation: React.FunctionComponent = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles['list-item']}>H</li>
				<li className={styles['list-item']}>D</li>
				<li className={styles['list-item']}>L</li>
			</ul>
		</nav>
	);
};

export default Navigation;
