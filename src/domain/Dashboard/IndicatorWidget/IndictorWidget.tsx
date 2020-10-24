import React, { ReactElement } from 'react';
import styles from './IndicatorWidget.module.scss';
import Headline from './../../../shared/Headline/Headline';
import Indicator from './../Indicator/Indicator';
import { IconType } from 'react-icons';

/** ==============================================
 * Types/Interfaces
 * ============================================== */

interface IndicatorProps {
	value: number;
}

interface ContextBarProps {
	text: string;
	value: number;
	icon?: IconType;
}

const IndicatorWidget = (): ReactElement => {
	return (
		<div>
			Indicator Widget
			<Headline headingLevel="h2" headlineText="Comments" />
			<Indicator />
		</div>
	);
};

export default IndicatorWidget;
