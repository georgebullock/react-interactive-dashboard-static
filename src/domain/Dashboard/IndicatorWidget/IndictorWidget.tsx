import React, { ReactElement } from 'react';
import styles from './IndicatorWidget.module.scss';
import Indicator from './../Indicator/Indicator';

/** ==============================================
 * Types/Interfaces
 * ============================================== */

const IndicatorWidget = (): ReactElement => {
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
