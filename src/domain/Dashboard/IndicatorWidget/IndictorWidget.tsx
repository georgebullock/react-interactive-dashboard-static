import React, { ReactElement } from 'react';
import styles from './IndicatorWidget.module.scss';
import Indicator from './../Indicator/Indicator';
import { useFetchRequest } from './../../../shared/hooks/useFetchRequest';

/* ==============================================
 * Types/Interfaces
 * ============================================== */

const IndicatorWidget = (): ReactElement => {
	const endpoint = { url: 'http://localhost:3000/users' };
	const responseState = useFetchRequest(endpoint);

	console.log('responseState: ', responseState);

	return (
		<section className={styles.widget}>
			<Indicator
				headingLevel="h2"
				headlineText="Comments"
				indicatorValue="300"
				contextBarValue="35%"
				hasContextBar={true}
			/>
		</section>
	);
};

export default IndicatorWidget;
