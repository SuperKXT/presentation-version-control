import dedent from 'dedent';
import {
	Appear,
	Box,
	CodePane,
	CodeSpan,
	Deck,
	FlexBox,
	Grid,
	Heading,
	Image,
	ListItem,
	MarkdownSlide,
	MarkdownSlideSet,
	OrderedList,
	Slide,
	SlideLayout,
	Text,
	UnorderedList,
	codePaneThemes,
} from 'spectacle';

import { Hr } from './components/hr.component';
import { Link } from './components/link.component';
import { Template } from './template';
import { theme } from './theme';

const formidableLogo =
	'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

const SlideFragments = () => (
	<>
		<Slide>
			<Text>This is a slide fragment.</Text>
		</Slide>
		<Slide>
			<Text>This is also a slide fragment.</Text>
			<Appear>
				<Text>This item shows up!</Text>
			</Appear>
			<Appear>
				<Text>This item also shows up!</Text>
			</Appear>
		</Slide>
	</>
);

export const Presentation = () => (
	<Deck
		theme={theme}
		template={Template}
	>
		<Slide>
			<FlexBox
				height='100%'
				flexDirection='column'
			>
				<Heading
					p={0}
					px={50}
					color='bg'
					backgroundColor='fg'
					fontSize='h1'
				>
					Version Control
				</Heading>
				<Hr style={{ width: '75%' }} />
				<Heading fontSize='h3'>Git & GitHub</Heading>
				<Link
					href='https://superkxt.com/version-control'
					style={{ position: 'absolute', bottom: 50 }}
				/>
			</FlexBox>
		</Slide>
		<Slide>
			<Heading>What is Version Control?</Heading>
		</Slide>
		<Slide>
			<UnorderedList>
				<Heading>What is Version Control?</Heading>
				<ListItem>
					A system that manages and keeps records of changes made to files
				</ListItem>
				<ListItem>Allows for collaboration</ListItem>
				<ListItem>Associates changes with authors</ListItem>
				<ListItem>
					Allows you to revert changes and go back to a previous state
				</ListItem>
				<ListItem>Useful beyond code/programming</ListItem>
			</UnorderedList>
		</Slide>
		<Slide>
			<Heading>Further Reading</Heading>
			<UnorderedList>
				<ListItem>
					<Link href='https://www.rithmschool.com/courses/git' />
				</ListItem>
				<ListItem>
					<Link href='https://www.codecademy.com/learn/learn-git' />
				</ListItem>
				<ListItem>
					<Link href='https://missing.csail.mit.edu/2020/version-control' />
				</ListItem>
				<ListItem>
					<Link href='https://ohshitgit.com' />
				</ListItem>
				<ListItem>
					<Link href='https://jvns.ca/blog/2024/01/26/inside-git' />
				</ListItem>
				<ListItem>
					<Link href='https://jvns.ca/blog/2024/03/08/how-head-works-in-git' />
				</ListItem>
			</UnorderedList>
		</Slide>
		<Slide>
			<Heading>Animated Elements</Heading>
			<OrderedList>
				<Appear>
					<ListItem>Elements can animate in!</ListItem>
				</Appear>
				<Appear>
					<ListItem>Out of order</ListItem>
				</Appear>
				<Appear priority={0}>
					<ListItem>
						Just identify the order with the prop <CodeSpan>priority</CodeSpan>!
					</ListItem>
				</Appear>
			</OrderedList>
		</Slide>
		<Slide>
			<FlexBox>
				<Text>These</Text>
				<Text>Text</Text>
				<Text color='secondary'>Items</Text>
				<Text fontWeight='bold'>Flex</Text>
			</FlexBox>
			<Grid
				gridTemplateColumns='1fr 2fr'
				gridColumnGap={15}
			>
				<Box backgroundColor='primary'>
					<Text color='secondary'>Single-size Grid Item</Text>
				</Box>
				<Box backgroundColor='secondary'>
					<Text>Double-size Grid Item</Text>
				</Box>
			</Grid>
			<Grid
				gridTemplateColumns='1fr 1fr 1fr'
				gridTemplateRows='1fr 1fr 1fr'
				gridRowGap={1}
			>
				{Array(9)
					.fill('')
					.map((_, index) => (
						<FlexBox
							key={`formidable-logo-${index}`}
							paddingTop={0}
							flex={1}
						>
							<Image
								src={formidableLogo}
								width={100}
							/>
						</FlexBox>
					))}
			</Grid>
		</Slide>
		<SlideFragments />
		<Slide>
			<CodePane
				language='jsx'
				highlightRanges={[1, 3]}
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
				theme={codePaneThemes.dracula}
			>{dedent`
			import { createClient, Provider } from 'urql';

			const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });

			const App = () => (
				<Provider value={client}>
					<Todos />
				</Provider>
			);
        `}</CodePane>
			<Box height={20} />
			<CodePane language='java'>{dedent`
			public class NoLineNumbers {
				public static void main(String[] args) {
					System.out.println("Hello");
				}
			}
        `}</CodePane>
		</Slide>
		<MarkdownSlide componentProps={{ color: 'yellow' }}>
			{`
        # This is a Markdown Slide

        - You can pass props down to all elements on the slide.
        - Just use the \`componentProps\` prop.
        `}
		</MarkdownSlide>
		<MarkdownSlide animateListItems>
			{`
       # This is also a Markdown Slide

       It uses the \`animateListItems\` prop.

       - Its list items...
       - ...will appear...
       - ...one at a time.
      `}
		</MarkdownSlide>
		<Slide>
			<Grid
				gridTemplateColumns='50% 50%'
				gridTemplateRows='50% 50%'
				height='100%'
			>
				<FlexBox
					alignItems='center'
					justifyContent='center'
				>
					<Heading>This is a 4x4 Grid</Heading>
				</FlexBox>
				<FlexBox
					alignItems='center'
					justifyContent='center'
				>
					<Text textAlign='center'>
						With all the content aligned and justified center.
					</Text>
				</FlexBox>
				<FlexBox
					alignItems='center'
					justifyContent='center'
				>
					<Text textAlign='center'>
						It uses Spectacle <CodeSpan>{'<Grid />'}</CodeSpan> and{' '}
						<CodeSpan>{'<FlexBox />'}</CodeSpan> components.
					</Text>
				</FlexBox>
				<FlexBox
					alignItems='center'
					justifyContent='center'
				>
					<Box
						width={200}
						height={200}
						backgroundColor='secondary'
					/>
				</FlexBox>
			</Grid>
		</Slide>
		<MarkdownSlideSet>
			{`
        # This is the first slide of a Markdown Slide Set
        ---
        # This is the second slide of a Markdown Slide Set
        `}
		</MarkdownSlideSet>
		<SlideLayout.List
			title='Slide layouts!'
			items={['Two-column', 'Lists', 'And more!']}
			animateListItems
		/>
	</Deck>
);
