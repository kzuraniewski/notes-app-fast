import { css as _css } from '@microsoft/fast-element';

import reset from '../styles/reset.css?inline';
import main from '../styles/main.css?inline';

export const css: typeof _css = (strings) => _css`
	${reset}
	${main}
	${_css(strings)}
`;
