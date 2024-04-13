import type { DeckProps } from 'spectacle';
import './theme.css';

export const theme: DeckProps['theme'] = {
	colors: {
		primary: 'var(--purple)',
		secondary: 'var(--read)',
		tertiary: 'var(--yellow)',
		quaternary: 'var(--green)',
		quinary: 'var(--blue)',
	},
	fonts: {
		header: '"lexend-bold", sans-serif',
		text: '"lexend", sans-serif',
		monospace: '"lexend", "Source Code Pro", monospace',
	},
};
