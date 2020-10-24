import React, { ReactElement } from 'react';
import styles from './Headline.module.scss';

/** ==============================================
 * Types/Interfaces
 * ============================================== */

export interface HeadlineProps {
	headingLevel: keyof React.ReactHTML;
	headlineText: string;
}

const Headline = ({
	headingLevel,
	headlineText
}: HeadlineProps): ReactElement => {
	const Element = headingLevel;
	return <Element className={styles.headline}>{headlineText}</Element>;
};

export default Headline;
