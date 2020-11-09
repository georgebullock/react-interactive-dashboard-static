import React, { ReactElement } from 'react';
import styles from './IndicatorWidget.module.scss';
import Indicator from './../Indicator/Indicator';
import { useIndicator } from './useIndicator';
import { HeadlineProps } from '../../../shared/components/Headline/Headline';

/* ==============================================
 * Types/Interfaces
 * ============================================== */
type DayRange = 1 | 7 | 14 | 21 | 28;

export type IndicatorWidgetProps = HeadlineProps & {
	url: string;
	dayRange: DayRange;
	hasContextBar?: boolean;
};
const IndicatorWidget: React.FunctionComponent<IndicatorWidgetProps> = ({
	url,
	dayRange,
	headingLevel,
	headlineText,
	hasContextBar
}: IndicatorWidgetProps): ReactElement => {
	const { indicatorValue, contextValue } = useIndicator(url, dayRange);

	console.log('indicatorValue in indicatorWidget: ', indicatorValue);
	console.log('contextValue in indicatorWidget: ', contextValue);

	return (
		<section className={styles.widget}>
			<Indicator
				headingLevel={headingLevel}
				headlineText={headlineText}
				indicatorValue={indicatorValue}
				contextBarValue={contextValue}
				hasContextBar={hasContextBar}
			/>
		</section>
	);
};

export default IndicatorWidget;
