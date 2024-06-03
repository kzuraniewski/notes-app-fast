import { FASTElement, customElement, html } from '@microsoft/fast-element';
import './components';

const template = html<AppRoot>`
	<div id="app"></div>
`;

@customElement({
	name: 'app-root',
	template,
})
export class AppRoot extends FASTElement {}
