import React from 'react';
import Grid from './../../components/Grid/Grid';
import Navigation from './../../components/Navigation/Navigation';

const Dashboard = (): JSX.Element => {
	return (
		<Grid row={true}>
			<Grid sm={12} md={1}>
				<Navigation />
			</Grid>
			<Grid sm={12} md={11}>
				<div style={{ height: 1000, backgroundColor: '#c1c1c1' }}>
					Main Content
				</div>
			</Grid>
		</Grid>
	);
};

export default Dashboard;
