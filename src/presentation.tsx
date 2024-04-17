import dedent from 'dedent';
import { Fragment } from 'react/jsx-runtime';
import {
	Appear,
	CodePane,
	CodeSpan,
	Deck,
	FlexBox,
	Grid,
	Heading,
	Image,
	ListItem,
	OrderedList,
	Slide,
	SlideLayout,
	Stepper,
	Text,
	UnorderedList,
} from 'spectacle';

import branches from './assets/branches.jpg';
import gitBreakdown1 from './assets/git-breakdown-1.jpg';
import gitBreakdown2 from './assets/git-breakdown-2.jpg';
import gitBreakdown3 from './assets/git-breakdown-3.jpg';
import gitBreakdown4 from './assets/git-breakdown-4.jpg';
import gitBreakdown5 from './assets/git-breakdown-5.jpg';
import gitBreakdown6 from './assets/git-breakdown-6.jpg';
import gitBreakdown7 from './assets/git-breakdown-7.jpg';
import gitBreakdown8 from './assets/git-breakdown-8.jpg';
import gitBreakdown9 from './assets/git-breakdown-9.jpg';
import gitInterfaces from './assets/git-interfaces.jpg';
import gitLogo from './assets/git.svg';
import githubLogo from './assets/github-logo.svg';
import githubMark from './assets/github-mark.svg';
import inviteQr from './assets/invite-qr.jpeg';
import oneMoreThing from './assets/one-more-thing.gif';
import pushAndPull1 from './assets/push-and-pull-1.jpg';
import pushAndPull2 from './assets/push-and-pull-2.jpg';
import pushAndPull3 from './assets/push-and-pull-3.jpg';
import versionControlComic from './assets/version-control-comic.jpg';
import versionControlVsTraditional from './assets/version-control-vs-traditional.jpg';
import commitMessages from './assets/xkcd-1296.png';
import howGitWorks from './assets/xkcd-1597.png';
import { Hr } from './components/hr.component';
import { Link } from './components/link.component';
import { Template } from './template';
import { codeTheme, theme } from './theme';

import type { CSSProperties } from 'react';

const codeSpanStyles: CSSProperties = {
	fontSize: '0.9em',
	backgroundColor: 'var(--grey-4)',
	borderRadius: 5,
	padding: '5px 10px',
};

const slideHeadingStyles: CSSProperties = {
	margin: 0,
	marginBlock: 'auto',
	backgroundColor: 'var(--fg)',
	color: 'var(--bg)',
	minWidth: 450,
	textAlign: 'center',
};

const calloutStyles: CSSProperties = {
	fontSize: '1.5em',
	textWrap: 'balance',
	width: '75%',
	marginInline: 'auto',
	backgroundColor: 'var(--grey-3)',
	textAlign: 'center',
	borderRadius: 10,
};

const gitBreakdown = [
	{ command: 'cd repo', image: gitBreakdown1 },
	{ command: "echo 'hello world!' > example.txt", image: gitBreakdown2 },
	{ command: 'git add example.txt', image: gitBreakdown3 },
	{ command: "git commit -m 'Add `example.txt`'", image: gitBreakdown4 },
	{ command: 'git push origin dev', image: gitBreakdown5 },
	{ command: 'git reset HEAD~3', image: gitBreakdown6 },
	{ command: 'git reset --hard origin/dev', image: gitBreakdown7 },
	{ command: 'git switch main', image: gitBreakdown8 },
	{ command: 'git pull origin dev', image: gitBreakdown9 },
];

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
				<FlexBox
					style={{
						flexDirection: 'column',
						alignItems: 'flex-start',
						gap: 10,
						position: 'absolute',
						left: 50,
						bottom: 50,
					}}
				>
					<Link
						href='https://version-control.superkxt.com'
						style={{ fontSize: '1em' }}
					/>
					<Link
						href='https://github.com/WiMetrixDev/knowledge/blob/main/version-control/version-control.md'
						style={{ fontSize: '1em' }}
					/>
				</FlexBox>
			</FlexBox>
		</Slide>
		<Slide>
			<Grid
				style={{
					height: '100%',
					gridTemplateColumns: '1fr 1fr',
					placeItems: 'center',
				}}
			>
				<Heading style={slideHeadingStyles}>Version Control</Heading>
				<Image
					style={{ height: '100%' }}
					src={versionControlComic}
				/>
			</Grid>
		</Slide>
		<SlideLayout.List
			title='What is Version Control?'
			titleProps={{
				style: {
					marginBlock: '0px',
					paddingBlock: '0px',
				},
			}}
			items={[
				'System that manages files and changes made',
				'Allows for collaboration',
				'Associates changes with authors',
				'Allows reverting to a previous state',
				'Useful beyond code/programming',
			]}
			animateListItems
		/>
		<SlideLayout.Center>
			<Image src={versionControlVsTraditional} />
		</SlideLayout.Center>
		<Slide>
			<Grid
				style={{
					height: '100%',
					gridTemplateColumns: '1fr 1fr',
					placeItems: 'center',
				}}
			>
				<Heading style={slideHeadingStyles}>Git</Heading>
				<Image src={howGitWorks} />
			</Grid>
		</Slide>
		<SlideLayout.List
			title='What is Git?'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			items={[
				'A Version Control System',
				'Created by Linus Torvalds in 2005',
				'Replacement for BitKeeper to manage the Linux Kernel',
				'Command Line Program',
				'Distributed Version Control',
				'Cross-platform',
				'Free and Open Source',
			]}
			animateListItems
		/>
		<SlideLayout.List
			title='Distributed'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			items={[
				'All contributors have a copy of the repo, with all files and the full history.',
				'Contributors sync their repos through the use of a central remote repo, e.g. GitHub.',
				'Hosted remotes like GitHub also provide access to the repo through a web browser.',
			]}
			animateListItems
		/>
		<SlideLayout.List
			title='Interface'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			items={[
				'Command Line Interface by default',
				'Many available GUIs. (Github Desktop, GitKraken)',
				'Integrated IDE Tooling',
				'Web UIs by remote repo providers like GitHub',
			]}
			animateListItems
		/>
		<SlideLayout.Center>
			<Image src={gitInterfaces} />
		</SlideLayout.Center>
		<SlideLayout.List
			title='How Git Works?'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			items={[
				'Git tracks your files using “snapshots”, records of the files in your project at a given point in time',
				'You decide when to take a snapshot and of what files, this is known as a commit',
				'Can be used as noun or verb',
				'“I committed code” and “I just made a new commit”',
				'Have the ability to go back and visit any commit',
				'A project is made up of a bunch of commits',
			]}
			animateListItems
		/>
		<SlideLayout.List
			title='Terminology'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			items={[
				<Fragment key='0'>
					<strong>Repository</strong>{' '}
					<small>- A project or code-base. AKA repo</small>
				</Fragment>,
				<Fragment key='1'>
					<strong>Working Tree</strong>{' '}
					<small>- A directory with a repo associated</small>
				</Fragment>,
				<Fragment key='2'>
					<strong>Commit</strong>{' '}
					<small>- A snapshot of the repo at a point in time</small>
				</Fragment>,
				<Fragment key='3'>
					<strong>The Index</strong>{' '}
					<small>- AKA Staging Area. Tracks uncommitted changes</small>
				</Fragment>,
				<Fragment key='4'>
					<strong>Branch</strong>{' '}
					<small>- A group of commits with a specific name</small>
				</Fragment>,
				<Fragment key='5'>
					<strong>Tag</strong>{' '}
					<small>- A label for a commit. Used with releases</small>
				</Fragment>,
			]}
			animateListItems
		/>
		<SlideLayout.List
			title='Terminology Ctd...'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			items={[
				<Fragment key='2'>
					<Text style={{ margin: 0, padding: 0 }}>
						<strong>HEAD</strong>{' '}
						<small>- Points to the currently checked out code</small>
					</Text>
					<UnorderedList style={{ fontSize: '0.8em' }}>
						<ListItem>
							<strong>If a branch:</strong> HEAD points to the branch name
						</ListItem>
						<ListItem>
							<strong>If a commit:</strong> Detached Head. points to the hash of
							the commit
						</ListItem>
					</UnorderedList>
				</Fragment>,
			]}
			animateListItems
		/>
		<SlideLayout.List
			title='Repository (Repo)'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			items={[
				'A project, or group of files tracked together',
				'A collection of files and their history (commits)',
				'Can be on a local machine or on a server (GitHub)',
				'Copying a repo from a remote server: cloning',
				'A server allows teams to work together',
				'Getting commits from server: pulling changes',
				'Adding local changes to server: pushing changes',
			]}
			animateListItems
		/>
		<Slide>
			<Heading
				style={{ marginBlock: '0px', paddingBlock: '0px', textAlign: 'left' }}
			>
				Pushing and Pulling
			</Heading>
			<FlexBox style={{ flexGrow: 1, justifyContent: 'center', marginTop: 20 }}>
				<Stepper values={[1, 2, 3]}>
					{(value) => (
						<Image
							src={
								value === 1
									? pushAndPull1
									: value === 2
										? pushAndPull2
										: pushAndPull3
							}
						/>
					)}
				</Stepper>
			</FlexBox>
		</Slide>
		<SlideLayout.List
			title='Commits'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			items={[
				'Snapshots of your project state at a point in time',
				'Basic unit for tracking changes in git',
				<Fragment key='3'>
					<Text style={{ margin: 0, padding: 0 }}>
						Commits contain 3 pieces of information
					</Text>
					<OrderedList style={{ fontSize: '0.8em' }}>
						<ListItem>
							descriptive commit message with information about changes
						</ListItem>
						<ListItem>Reference to the previous/parent commit</ListItem>
						<ListItem>
							An SHA-1 hash code{' '}
							<CodeSpan style={codeSpanStyles}>
								fb2d2ec5069fc6776c80b3ad6b7cbde3cade4e
							</CodeSpan>
						</ListItem>
					</OrderedList>
				</Fragment>,
			]}
			animateListItems
		/>
		<SlideLayout.List
			title='Sha-what?'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			items={[
				'Hashing is the process of transforming any given key or a string of characters into another value. Typically a shorter, fixed-length value',
				'SHA-1 is a hashing algorithm',
				'It takes data as input and generates a unique 40 character string',
				'The string uniquely identifies each commit',
			]}
			animateListItems
		/>
		<SlideLayout.List
			title='Atomic Commits'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			items={[
				'Single Responsibility Principle: A unit of code should do only one thing',
				'The smallest change that is meaningful on its own',
				'Ideally can be described in one simple sentence',
				<Fragment key='4'>
					<Text style={{ margin: 0, padding: 0 }}>Why?</Text>
					<UnorderedList style={{ fontSize: '0.8em', lineHeight: 1 }}>
						<ListItem>An atomic change is a reversible change</ListItem>
						<ListItem>Clean Git History</ListItem>
						<ListItem>Easier to review and understand changes</ListItem>
					</UnorderedList>
				</Fragment>,
			]}
			animateListItems
		/>
		<SlideLayout.List
			title='Making a commit'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			listType='ordered'
			items={[
				<Fragment key='1'>
					<Text style={{ fontSize: '0.6em', margin: 0, padding: 5 }}>
						Add the changed files to the staging area
					</Text>
					<CodePane
						language='bash'
						showLineNumbers={false}
						theme={codeTheme}
					>
						{"echo 'hello world!' > example.txt"}
					</CodePane>
				</Fragment>,
				<Fragment key='2'>
					<Text style={{ fontSize: '0.6em', margin: 0, padding: 5 }}>
						Add changed files to the staging area
					</Text>
					<CodePane
						language='bash'
						showLineNumbers={false}
						theme={codeTheme}
					>{dedent`
						git add example.txt
						# or
						git add .
					`}</CodePane>
				</Fragment>,
				<Fragment key='3'>
					<Text style={{ fontSize: '0.6em', margin: 0, padding: 5 }}>
						Add a commit with a commit message
					</Text>
					<CodePane
						language='bash'
						showLineNumbers={false}
						theme={codeTheme}
					>
						{"git commit -m 'Add `example.txt` file'"}
					</CodePane>
				</Fragment>,
				<Fragment key='4'>
					<Text style={{ fontSize: '0.6em', margin: 0, padding: 5 }}>
						(Optional) Push the changes to remote
					</Text>
					<CodePane
						language='bash'
						showLineNumbers={false}
						theme={codeTheme}
					>
						{'git push origin main'}
					</CodePane>
				</Fragment>,
			]}
			animateListItems
		/>
		<Slide>
			<Heading
				style={{ textAlign: 'left', marginBlock: '0px', paddingBlock: '0px' }}
			>
				Commit Messages
			</Heading>
			<FlexBox flexGrow={1}>
				<Image
					src={commitMessages}
					width='50%'
				/>
			</FlexBox>
		</Slide>
		<Slide>
			<Heading
				style={{
					textAlign: 'left',
					marginBlock: '0px',
					paddingBlock: '0px',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				Commit Messages <Link href='https://cbea.ms/git-commit' />
			</Heading>
			<OrderedList
				className='compact'
				style={{ fontSize: '2.2em' }}
			>
				<Appear>
					<ListItem>Separate subject from body with a blank line</ListItem>
				</Appear>
				<Appear>
					<ListItem>Limit the subject line to 50 characters</ListItem>
				</Appear>
				<Appear>
					<ListItem>Capitalize the subject line</ListItem>
				</Appear>
				<Appear>
					<ListItem>Do not end the subject line with a period</ListItem>
				</Appear>
				<Appear>
					<ListItem>
						Use the imperative mood in the subject line
						<UnorderedList style={{ fontSize: '0.8em', lineHeight: 1 }}>
							<ListItem>
								If applied, this commit will &quot;your commit message&quot;
							</ListItem>
						</UnorderedList>
					</ListItem>
				</Appear>
				<Appear>
					<ListItem>Wrap the body at 72 characters</ListItem>
				</Appear>
				<Appear>
					<ListItem>Use the body to explain what and why vs. how</ListItem>
				</Appear>
			</OrderedList>
			<Appear>
				<Text style={calloutStyles}>
					In addition to the general commit guidelines, organizations and
					projects can have their own preferences and conventions for commit
					messages
				</Text>
			</Appear>
		</Slide>
		<SlideLayout.List
			title='Branches'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			items={[
				'A group of commits',
				'All commits live on a branch',
				'There can be many branches, but each repo must have one default branch',
				'Each branch is a different version of the repo',
				<Fragment key='5'>
					The default branch is called{' '}
					<CodeSpan style={codeSpanStyles}>master</CodeSpan> or{' '}
					<CodeSpan style={codeSpanStyles}>main</CodeSpan>
				</Fragment>,
				<Fragment key='6'>
					One branch can be <strong>merged</strong> into another
				</Fragment>,
			]}
			animateListItems
		/>
		<Slide>
			<Heading
				style={{ textAlign: 'left', marginBlock: '0px', paddingBlock: '0px' }}
			>
				Branches
			</Heading>
			<FlexBox flexGrow={1}>
				<Image src={branches} />
			</FlexBox>
		</Slide>
		<Slide padding={10}>
			<Text style={{ margin: '0px', paddingBlock: '0px', textAlign: 'left' }}>
				Git Overview
			</Text>
			<FlexBox style={{ flexGrow: 1, justifyContent: 'center', marginTop: 20 }}>
				<Stepper values={gitBreakdown}>
					{(value) => {
						const curr = value as (typeof gitBreakdown)[number] | undefined;
						if (!curr) return null;
						return (
							<>
								<CodePane
									language='bash'
									showLineNumbers={false}
									theme={codeTheme}
								>
									{curr.command}
								</CodePane>
								<Image src={curr.image} />
							</>
						);
					}}
				</Stepper>
			</FlexBox>
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
			<Grid
				style={{
					height: '100%',
					gridTemplateColumns: '1fr 1fr',
					placeItems: 'center',
				}}
			>
				<Heading style={slideHeadingStyles}>GitHub</Heading>
				<FlexBox style={{ flexDirection: 'column', gap: 30, width: 275 }}>
					<Image src={githubMark} />
					<Image src={githubLogo} />
				</FlexBox>
			</Grid>
		</Slide>
		<SlideLayout.List
			title='What is GitHub?'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			items={[
				'A website for storing your git projects',
				'Users can have personal repositories, both public and private',
				'Organizations can have repositories with fine-grained access control',
				'Home to many open-source projects',
				'Alternatives: BitBucket, GitLab',
			]}
			animateListItems
		/>
		<SlideLayout.List
			title='Pull Requests'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			items={[
				'Proposal to merge changes from one branch into another',
				'Includes a title and description',
				'Changes can be discussed and reviewed by collaborators',
				'Reviewers can request changes required to satisfy requirements/standards',
				'Follow-up commits are added in response to feedback',
				'Merged only if given the green light by reviewers',
			]}
			animateListItems
		/>
		<SlideLayout.List
			title='README.md'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			items={[
				'Information about the project included in this document',
				'Uses markdown syntax. Clear and easy to read',
				'Can have info about getting started or deployment',
				'Can include info about code structure and standards',
				'Can include technical details about the project',
				'Can serve as documentation',
			]}
			animateListItems
		/>
		<SlideLayout.List
			title='SSH Keys'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			listProps={{ style: { fontSize: '2.5em' }, className: 'compact' }}
			items={[
				'Secure Shell Protocol',
				'Cryptographic network protocol. Secure access over insecure network',
				'username/password can be cumbersome and insecure. Doubly so when using 2FA.',
				'Makes using multiple accounts trivial',
				'Access to an SSH key can be easily revoked',
				'Commit Signing: verifying that the commit came from a trusted source',
				<Link
					key='7'
					href='https://docs.github.com/en/authentication'
				/>,
			]}
			animateListItems
		/>
		<SlideLayout.List
			title='Other Offerings'
			titleProps={{ style: { marginBlock: '0px', paddingBlock: '0px' } }}
			items={[
				<Fragment key='1'>
					<strong>Actions</strong> - Automate your workflows. (Tests, linting,
					CI/CD)
				</Fragment>,
				<Fragment key='2'>
					<strong>Issues</strong> - Keeping track of bugs, feature requests, and
					ongoing work
				</Fragment>,
				<Fragment key='3'>
					<strong>Releases</strong> - Automatically create and share build
					artifacts and setups
				</Fragment>,
				<Fragment key='4'>
					<strong>Projects</strong> - Basic project management workflows
				</Fragment>,
				<Fragment key='5'>
					<strong>GH CLI</strong> - Embrace the terminal
				</Fragment>,
			]}
			animateListItems
		/>
		<Slide>
			<Heading
				style={{ textAlign: 'left', marginBlock: '0px', paddingBlock: '0px' }}
			>
				Accepting Invites
			</Heading>
			<FlexBox style={{ flexGrow: 1, flexDirection: 'column', gap: 20 }}>
				<Image
					src={inviteQr}
					style={{ width: '35%' }}
				/>
				<Link href='https://bit.ly/accepting-invites' />
			</FlexBox>
		</Slide>
		<Slide>
			<Grid
				style={{
					height: '100%',
					gridTemplateColumns: '1fr 1fr',
					placeItems: 'center',
				}}
			>
				<Heading style={slideHeadingStyles}>Misc</Heading>
				<Image src={oneMoreThing} />
			</Grid>
		</Slide>
		<Slide>
			<Heading
				style={{ textAlign: 'left', marginBlock: '0px', padding: '0px' }}
			>
				Two-Factor Authentication (2FA)
			</Heading>
			<Appear>
				<Text style={{ fontSize: '2rem', marginBlock: '0px' }}>
					An extra layer of security for your online accounts
				</Text>
			</Appear>
			<Appear>
				<Text style={{ fontFamily: 'lexend-bold' }}>How it works:</Text>
				<UnorderedList style={{ fontSize: '1.75rem' }}>
					<ListItem>
						1st Factor: Something you know, like your password or PIN
					</ListItem>
					<ListItem>
						2nd Factor: Something you have, like your phone, a security key, or
						biometrics
					</ListItem>
				</UnorderedList>
			</Appear>
			<Appear>
				<Text style={{ fontFamily: 'lexend-bold' }}>Why use it?</Text>
				<UnorderedList style={{ fontSize: '1.75rem' }}>
					<ListItem>
						Adds an extra hurdle for malicious actors, even if they steal your
						password
					</ListItem>
					<ListItem>
						Keep sensitive information like financial records secure
					</ListItem>
				</UnorderedList>
			</Appear>
		</Slide>
		<Slide>
			<Heading
				style={{ textAlign: 'left', marginBlock: '0px', padding: '0px' }}
			>
				Two-Factor Authentication (2FA)
			</Heading>
			<Text style={{ fontFamily: 'lexend-bold' }}>Methods of 2FA</Text>
			<UnorderedList
				className='compact'
				style={{ fontSize: '1.75rem' }}
			>
				<Appear>
					<ListItem>
						<strong>SMS Passcode</strong>: A one-time code sent via text message
						to your phone. (Convenient but insecure. Susceptible to sim swapping
						attacks)
					</ListItem>
				</Appear>
				<Appear>
					<ListItem>
						<strong>Email</strong>: Send a link to your email with a one-time
						code
					</ListItem>
				</Appear>
				<Appear>
					<ListItem>
						<strong>Push Notifications</strong>: Approve login attempts directly
						from your phone with a tap
					</ListItem>
				</Appear>
				<Appear>
					<ListItem>
						<strong>Authenticator App</strong>: Time-based one-time codes on a
						phone app
					</ListItem>
				</Appear>
				<Appear>
					<ListItem>
						<strong>Security Key</strong>: Physical device that plugs into your
						computer or phone to generate login codes
					</ListItem>
				</Appear>
				<Appear>
					<ListItem>
						<strong>Biometrics</strong>: Fingerprints, IRIS, face recognition
					</ListItem>
				</Appear>
			</UnorderedList>
			<Appear>
				<Text style={calloutStyles}>
					<strong>Recommendation</strong>: 2FAS (Google Authenticator, Microsoft
					Authenticator)
				</Text>
			</Appear>
		</Slide>
		<Slide>
			<Heading
				style={{ textAlign: 'left', marginBlock: '0px', padding: '0px' }}
			>
				Password Managers
			</Heading>
			<Appear>
				<Text style={{ fontSize: '2rem', marginBlock: '0px' }}>
					Secure applications that generate, store, and manage strong, unique
					passwords
				</Text>
			</Appear>
			<Appear>
				<Text style={{ fontFamily: 'lexend-bold' }}>What they do:</Text>
			</Appear>
			<UnorderedList style={{ fontSize: '1.75rem' }}>
				<Appear>
					<ListItem>
						Generate strong, random passwords for each website or service
					</ListItem>
				</Appear>
				<Appear>
					<ListItem>
						Securely store your passwords behind a single master password
					</ListItem>
				</Appear>
				<Appear>
					<ListItem>
						Automatically fill in login credentials on websites and apps
					</ListItem>
				</Appear>
				<Appear>
					<ListItem>
						Can store secure notes and other sensitive information like bank
						accounts, backup codes
					</ListItem>
				</Appear>
			</UnorderedList>
		</Slide>
		<Slide>
			<Heading
				style={{ textAlign: 'left', marginBlock: '0px', padding: '0px' }}
			>
				Password Managers
			</Heading>
			<Text style={{ fontFamily: 'lexend-bold' }}>
				Why use a password manager?
			</Text>
			<UnorderedList
				className='compact'
				style={{ fontSize: '1.75rem' }}
			>
				<Appear>
					<ListItem>
						<strong>Stronger Passwords</strong>: Eliminates the risk of weak and
						duplicate passwords
					</ListItem>
				</Appear>
				<Appear>
					<ListItem>
						<strong>Improved Security</strong>: Reduces the chance of hacking
						due to password breaches
					</ListItem>
				</Appear>
				<Appear>
					<ListItem>
						<strong>Convenience</strong>: Auto-fill saves time and frustration
						by entering login details automatically
					</ListItem>
				</Appear>
				<Appear>
					<ListItem>
						<strong>Organization</strong>: Keeps all your passwords in one
						secure place
					</ListItem>
				</Appear>
				<Appear>
					<ListItem>
						<strong>Security Features</strong>: Many offer additional features
						like two-factor authentication and secure password sharing
					</ListItem>
				</Appear>
				<Appear>
					<ListItem>
						<strong>Cross-Platform Support</strong>: Access your passwords from
						any device with the password manager app
					</ListItem>
				</Appear>
			</UnorderedList>
			<Appear>
				<Text style={calloutStyles}>
					<strong>Recommendation</strong>: BitWarden
				</Text>
			</Appear>
		</Slide>
		<SlideLayout.Center>
			<Heading
				style={{
					display: 'inline-flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				Let&apos;s{' '}
				<Image
					style={{ display: 'inline-flex', margin: 0, padding: 0 }}
					src={gitLogo}
				/>{' '}
				going!
			</Heading>
		</SlideLayout.Center>
	</Deck>
);
