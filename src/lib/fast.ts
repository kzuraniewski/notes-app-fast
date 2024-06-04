import { css as _css } from '@microsoft/fast-element';

import reset from '../styles/reset.css?inline';
import global from '../styles/global.css?inline';

export const css: typeof _css = (strings) => _css`
	${reset}
	${global}
	${_css(strings)}
`;
