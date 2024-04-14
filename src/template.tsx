export const Template = (props: {
	slideNumber: number;
	numberOfSlides: number;
}) => {
	return (
		<div
			style={{
				position: 'absolute',
				bottom: 10,
				right: 15,
				color: 'var(--fg)',
				fontSize: '2.5rem',
				fontFamily: '"lexend"',
				lineHeight: 1,
			}}
		>
			{props.slideNumber} / {props.numberOfSlides}
		</div>
	);
};
