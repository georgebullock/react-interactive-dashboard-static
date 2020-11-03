import React, { ReactElement, useState } from 'react';
import styles from './IndicatorWidget.module.scss';
import Indicator from './../Indicator/Indicator';
import { useIndicator, Endpoint } from './useIndicator';
import { HeadlineProps } from '../../../shared/Headline/Headline';

/* ==============================================
 * Types/Interfaces
 * ============================================== */
export type IndicatorWidgetProps = HeadlineProps & {
	url: string;
	hasContextBar?: boolean;
};

type IndicatorWidgetState = {
	indicatorValue: number;
	contextBarValue: number;
};

const IndicatorWidget: React.FunctionComponent<IndicatorWidgetProps> = ({
	url,
	headingLevel,
	headlineText,
	hasContextBar
}: IndicatorWidgetProps): ReactElement => {
	const data = useIndicator(url);
	console.log('data.indicatorValue: ', data.indicatorValue);
	// const [indicatorValue, setIndicatorValue] = useState(data.indicatorValue);

	return (
		<section className={styles.widget}>
			<Indicator
				headingLevel={headingLevel}
				headlineText={headlineText}
				indicatorValue={300}
				contextBarValue={0.35}
				hasContextBar={hasContextBar}
			/>
		</section>
	);
};

export default IndicatorWidget;
