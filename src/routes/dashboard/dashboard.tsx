import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Dashboard.module.scss';

const Dashboard: React.FunctionComponent = () => {
	return (
		<div className={styles.container}>
			<Navigation />
			<main className={styles['main-content']}>Main</main>
		</div>
	);
};

export default Dashboard;
