import React from 'react';
import styles from './Dashboard.module.scss';

const Dashboard = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<nav className={styles.navigation}>Nav</nav>
			<main className={styles['main-content']}>Main</main>
		</div>
	);
};

export default Dashboard;
