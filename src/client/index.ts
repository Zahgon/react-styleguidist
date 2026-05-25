/* eslint-disable import/first */
import './polyfills';
import './styles';
import { createRoot, Root } from 'react-dom/client';
import renderStyleguide from './utils/renderStyleguide';
import { getParameterByName, hasInHash, getHash } from './utils/handleHash';

// Examples code revision to rerender only code examples (not the whole page) when code changes
let codeRevision = 0;

// Scrolls to origin when current window location hash points to an isolated view.
const scrollToOrigin = () => {
    throw new Error("STUB");
};

let reactRoot: Root | null = null;

const render = () => {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const styleguide = require('!!../loaders/styleguide-loader!./index.js');

	if (!reactRoot) {
		const rootNode = document.getElementById(styleguide.config.mountPointId);
		if (rootNode) {
			reactRoot = createRoot(rootNode);
		}
	}

	if (reactRoot) {
		reactRoot.render(renderStyleguide(styleguide, codeRevision));
	}
};

window.addEventListener('hashchange', render);
window.addEventListener('hashchange', scrollToOrigin);

/* istanbul ignore if */
if (module.hot) {
	module.hot.accept('!!../loaders/styleguide-loader!./index.js', () => {
        throw new Error("STUB");
    });
}

render();
