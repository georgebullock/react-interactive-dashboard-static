import React from 'react';
import Headline, {
	HeadlineProps
} from './../../../shared/components/Headline/Headline';
import styles from './Indicator.module.scss';

/* ==============================================
 * Types/Interfaces
 * ============================================== */
export type IndicatorProps = HeadlineProps & {
	indicatorValue: number;
	hasContextBar?: boolean;
	contextBarValue?: number;
};

export type ContextBarProps = {
	contextBarValue?: number;
};

const Indicator: React.FunctionComponent<IndicatorProps> = ({
	headingLevel,
	headlineText,
	indicatorValue,
	hasContextBar,
	contextBarValue
}: IndicatorProps) => {
	return (
		<article className={styles.indicator}>
			<Headline headlineText={headlineText} headingLevel={headingLevel} />
			<div className={styles['indicator__value']}>{indicatorValue}</div>
			{hasContextBar ? (
				<IndicatorContextBar contextBarValue={contextBarValue} />
			) : null}
		</article>
	);
};

export const IndicatorContextBar: React.FunctionComponent<ContextBarProps> = ({
	contextBarValue
}: ContextBarProps) => {
	return (
		<div className={styles['indicator__context-bar']}>{contextBarValue}</div>
	);
};

export default Indicator;
