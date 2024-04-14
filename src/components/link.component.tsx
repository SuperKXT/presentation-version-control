import type { ComponentProps } from 'react';

export const Link = ({
	children,
	label,
	...props
}: ComponentProps<'a'> & { label?: string }) => {
	return (
		<a
			{...props}
			style={{
				color: 'var(--red)',
				padding: '5px 10px',
				borderRadius: '5px',
				textDecorationColor: 'currentcolor',
				textDecorationSkipInk: 'none',
				fontSize: 25,
				border: '1px solid currentColor',
				...props.style,
			}}
		>
			{label ?? children ?? props.href}
		</a>
	);
};
