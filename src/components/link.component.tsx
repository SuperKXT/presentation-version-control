import type { ComponentProps } from 'react';

export const Link = ({
	children,
	label,
	...props
}: ComponentProps<'a'> & { label?: string }) => {
	return (
		<a
			target='_blank'
			{...props}
			style={{
				color: 'var(--blue)',
				padding: '5px 10px',
				borderRadius: '5px',
				textDecorationColor: 'var(--grey-3)',
				textDecorationSkipInk: 'none',
				textDecorationThickness: 3,
				textUnderlineOffset: 2,
				fontSize: 25,
				border: '2px solid var(--grey-2)',
				...props.style,
			}}
		>
			{label ?? children ?? props.href}
		</a>
	);
};
