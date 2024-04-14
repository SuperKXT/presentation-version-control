import type { ComponentProps } from 'react';

export const Hr = (props: ComponentProps<'hr'>) => {
	return (
		<hr
			{...props}
			style={{
				width: '100%',
				height: 2,
				borderRadius: 20,
				backgroundColor: 'var(--fg)',
				...props.style,
			}}
		/>
	);
};
