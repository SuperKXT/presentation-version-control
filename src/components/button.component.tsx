import styles from './button.module.css';

import { cx } from '../helpers/style.helpers';

import type { ComponentProps } from 'react';

export const Button = ({ children, ...props }: ComponentProps<'button'>) => {
	return (
		<button
			{...props}
			className={cx(styles.button, props.className)}
		>
			{children}
		</button>
	);
};
