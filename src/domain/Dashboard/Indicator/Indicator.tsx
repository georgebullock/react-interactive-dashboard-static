import React from 'react';
import styles from './Indicator.module.scss';

/** ==============================================
 * Types/Interfaces
 * ============================================== */

const Indicator = () => {
	return (
		<div className={styles.indicator}>
			{20}
			<IndicatorContextBar />
		</div>
	);
};

const IndicatorContextBar = () => {
	return <div className={styles['indicator__context-bar']}></div>;
};

export default Indicator;
