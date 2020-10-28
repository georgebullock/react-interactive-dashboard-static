import React from 'react';
import Headline, { HeadlineProps } from './../../../shared/Headline/Headline';
import styles from './Indicator.module.scss';

/* ==============================================
 * Types/Interfaces
 * ============================================== */
export interface IndicatorProps extends HeadlineProps {
	indicatorValue: string;
	contextBarValue?: string;
	hasContextBar?: boolean;
}

export interface ContextBarProps {
	contextBarValue?: string;
}

const Indicator: React.FunctionComponent<IndicatorProps> = ({
	headingLevel,
	headlineText,
	indicatorValue,
	contextBarValue,
	hasContextBar
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
		<div className={styles['indicator__context-bar']}>Δ {contextBarValue}</div>
	);
};

export default Indicator;
