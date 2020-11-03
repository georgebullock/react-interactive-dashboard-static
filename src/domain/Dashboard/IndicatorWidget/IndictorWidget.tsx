import React, { ReactElement, useState } from 'react';
import styles from './IndicatorWidget.module.scss';
import Indicator from './../Indicator/Indicator';
import { useIndicator } from './useIndicator';
import { HeadlineProps } from '../../../shared/Headline/Headline';

/* ==============================================
 * Types/Interfaces
 * ============================================== */
type DayRange = 7 | 14 | 21 | 28;

export type IndicatorWidgetProps = HeadlineProps & {
	url: string;
	dayRange: DayRange;
	hasContextBar?: boolean;
};

type IndicatorWidgetState = {
	indicatorValue: number;
	contextBarValue: number;
};

const IndicatorWidget: React.FunctionComponent<IndicatorWidgetProps> = ({
	url,
	dayRange,
	headingLevel,
	headlineText,
	hasContextBar
}: IndicatorWidgetProps): ReactElement => {
	const data = useIndicator(url, dayRange);

	return (
		<section className={styles.widget}>
			<Indicator
				headingLevel={headingLevel}
				headlineText={headlineText}
				indicatorValue={data.indicatorValue}
				contextBarValue={0.35}
				hasContextBar={hasContextBar}
			/>
		</section>
	);
};

export default IndicatorWidget;
