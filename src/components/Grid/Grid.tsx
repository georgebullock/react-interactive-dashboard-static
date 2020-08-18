import React from 'react';
import styles from './Grid.module.scss';

type GridAlignItems =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'stretch'
	| 'baseline';

type GridJustifyContent =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly';

type GridColSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridProps {
	row?: boolean;
	column?: boolean;
	expanded?: boolean;
	alignItems?: GridAlignItems;
	justify?: GridJustifyContent;
	lg?: GridColSizes;
	md?: GridColSizes;
	sm?: GridColSizes;
	children?: JSX.Element[] | JSX.Element;
}

const Grid: React.FunctionComponent<GridProps> = ({
	row,
	column,
	alignItems,
	justify,
	lg,
	md,
	sm,
	children
}: GridProps) => {
	const isRow = row || column;

	const classes: string =
		(!isRow ? styles.column : styles.row) +
		// Row styling
		(isRow && justify ? ` ${styles[justify]}` : '') +
		(isRow && alignItems ? ` ${styles['align-' + alignItems]}` : '') +
		// Column styling
		(!isRow && sm ? ` ${styles['sm-' + sm]}` : '') +
		(!isRow && md ? ` ${styles['md-' + md]}` : '') +
		(!isRow && lg ? ` ${styles['lg-' + lg]}` : '');

	return <div className={classes}>{children}</div>;
};

export default Grid;
