import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Presentation } from './presentation';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('root element not found in index.html');

const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<Presentation />
	</StrictMode>,
);
