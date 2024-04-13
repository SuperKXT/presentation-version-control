import type { DeckProps } from 'spectacle';
import './theme.css';

export const theme: DeckProps['theme'] = {
	colors: {
		primary: 'var(--purple)',
		secondary: 'var(--red)',
		tertiary: 'var(--bg)',
		quaternary: 'var(--green)',
		quinary: 'var(--blue)',
	},
	fonts: {
		header: '"lexend-bold", sans-serif',
		text: '"lexend", sans-serif',
		monospace: '"anonymous", "Source Code Pro", monospace',
	},
};
