import React from 'react';
import Grid from '../../shared/Grid/Grid';
import Navigation from '../../core/Navigation/Navigation';
import IndicatorWidget from './../../domain/Dashboard/IndicatorWidget/IndictorWidget';
import { routes } from '../../routes/index.routes';
import styles from './Dashboard.module.scss';

const Dashboard: React.FunctionComponent = () => {
	return (
		<div className={styles.container}>
			<div className={styles.sidebar}>
				<Navigation routes={routes} />
			</div>
			<main className={styles['main-content']}>
				{/* KPI Widget Row */}
				<Grid row={true}>
					<Grid row={false} sm={12} md={4}>
						<IndicatorWidget
							url="http://localhost:3000/comments"
							dayRange={7}
							headingLevel="h2"
							headlineText="Comments"
							hasContextBar={true}
						/>
					</Grid>

					<Grid row={false} sm={12} md={4}>
						<div
							style={{
								width: '1000px',
								maxWidth: '100%',
								height: '200px',
								backgroundColor: '#222222',
								borderRadius: '10px',
								opacity: '85%'
							}}
						></div>
					</Grid>

					<Grid row={false} sm={12} md={4}>
						<div
							style={{
								width: '1000px',
								maxWidth: '100%',
								height: '200px',
								backgroundColor: '#222222',
								borderRadius: '10px',
								opacity: '85%'
							}}
						></div>
					</Grid>
				</Grid>

				{/* Chart Row */}
				<Grid row={true}>
					<Grid row={false} sm={12}>
						<div
							style={{
								width: '1000px',
								maxWidth: '100%',
								height: '240px',
								backgroundColor: '#222222',
								borderRadius: '10px',
								opacity: '85%'
							}}
						></div>
					</Grid>
				</Grid>

				{/* List Widget Row */}
				<Grid row={true}>
					<Grid row={false} sm={12} md={4}>
						<div
							style={{
								width: '1000px',
								maxWidth: '100%',
								height: '200px',
								backgroundColor: '#222222',
								borderRadius: '10px',
								opacity: '85%'
							}}
						></div>
					</Grid>
					<Grid row={false} sm={12} md={4}>
						<div
							style={{
								width: '1000px',
								maxWidth: '100%',
								height: '200px',
								backgroundColor: '#222222',
								borderRadius: '10px',
								opacity: '85%'
							}}
						></div>
					</Grid>
					<Grid row={false} sm={12} md={4}>
						<div
							style={{
								width: '1000px',
								maxWidth: '100%',
								height: '200px',
								backgroundColor: '#222222',
								borderRadius: '10px',
								opacity: '85%'
							}}
						></div>
					</Grid>
				</Grid>
			</main>
		</div>
	);
};

export default Dashboard;
