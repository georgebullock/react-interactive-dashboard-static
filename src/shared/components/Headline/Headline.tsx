import React from 'react';
import styles from './Headline.module.scss';

/* ==============================================
 * Types/Interfaces
 * ============================================== */
type HeadlineTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HTMLElement = keyof React.ReactHTML;

export interface HeadlineProps {
	headingLevel: HTMLElement & HeadlineTags;
	headlineText: string;
}

const Headline: React.FunctionComponent<HeadlineProps> = ({
	headingLevel,
	headlineText
}: HeadlineProps) => {
	const Element = headingLevel;
	return <Element className={styles.headline}>{headlineText}</Element>;
};

export default Headline;