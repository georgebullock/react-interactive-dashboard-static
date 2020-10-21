import React, { ReactElement } from 'react';
import styles from './IndicatorWidget.module.scss';
import Headline from './../../../shared/Headline/Headline';
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

const Indicator = (): ReactElement => {
	return (
		<div>
			Indicator
			<ContextBar />
		</div>
	);
};

const ContextBar = (): ReactElement => {
	return <div>Context Bar</div>;
};

export default IndicatorWidget;
