import React, { ReactElement, useEffect } from 'react';
import styles from './IndicatorWidget.module.scss';
import Indicator from './../Indicator/Indicator';
import { useIndicator, Endpoint } from './useIndicator';

/* ==============================================
 * Types/Interfaces
 * ============================================== */

const IndicatorWidget = (url: Endpoint): ReactElement => {
	useIndicator(url).indicatorValue;

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
