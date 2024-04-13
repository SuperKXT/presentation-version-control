import { Box, FlexBox, FullScreen, Progress } from 'spectacle';

export const Template = (props: {
	slideNumber: number;
	numberOfSlides: number;
}) => {
	return (
		<FlexBox
			justifyContent='space-between'
			position='absolute'
			bottom={0}
			width={1}
		>
			<FullScreen color='var(--fg)' />
			<Box padding='1em'>
				<Progress />
				Slide {props.slideNumber} of {props.numberOfSlides}
			</Box>
		</FlexBox>
	);
};
